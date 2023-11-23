import { Axios } from "axios";
import { UserData, UserDataAPIResponse } from "~/@core/contracts/services/auth/auth";

export class RemoteLoadUser {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) {}

    async run(token: string): Promise<UserData> {
        try {
            const user = await this.axios.get(this.url, {
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            });
            
            return this.parseBody(user.data);
        } catch (error) {
            throw new Error("User not found.")
        }
    }

    private parseBody({ firstName: first_name, lastName: last_name, email, tasks }: UserDataAPIResponse): UserData {
        const userData: UserData = {
            first_name,
            last_name,
            email,
            tasks: tasks.map(task => ({ 
                props: { 
                    title: task.props.title,
                    description: task.props.description,
                    status: {
                        props: {
                            description: task.props.status.props.description
                        }
                    },
                    finish_at: task.props.finishAt
                }, 
                id: task.id, 
                _user_ref: task._userRef
            }))
        };
        
        return userData;
    }
}