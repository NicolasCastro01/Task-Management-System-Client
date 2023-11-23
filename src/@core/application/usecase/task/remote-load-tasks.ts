import { Axios } from "axios";

export class RemoteLoadTasks {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) { }

    async run(): Promise<any> {
        try {
            const token = localStorage.getItem('token') || '';
            const tasks = await this.axios.get(this.url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            return tasks.data as any;
        } catch (error) {
            throw new Error("User not found.")
        }
    }
}