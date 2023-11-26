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
            email
        };
        
        return userData;
    }
}