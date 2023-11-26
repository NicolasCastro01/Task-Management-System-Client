import { Axios } from "axios";
import { CreateTaskProps } from "~/@core/contracts/services/task/task";

export class RemoteSendTask {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) { }

    async run(data: CreateTaskProps) {
        const token = localStorage.getItem('token') || '';

        try {
            const response = await this.axios.post(this.url, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.status;
        } catch (error) {
            throw error;
        }
    }
}