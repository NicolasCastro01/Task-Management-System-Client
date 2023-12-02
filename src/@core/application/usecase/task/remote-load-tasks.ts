import { Axios, AxiosError } from "axios";
import { TaskAPIResponse } from "~/@core/contracts/services/auth/auth";

export class RemoteLoadTasks {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) { }

    async run(): Promise<TaskAPIResponse[]> {
        try {
            const token = localStorage.getItem('token') || '';
            const tasks = await this.axios.get(this.url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            return tasks.data as TaskAPIResponse[];
        } catch (error) {
            throw error;
        }
    }
}