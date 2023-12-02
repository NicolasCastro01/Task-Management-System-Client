import { Axios } from "axios";
import { EditTaskProps } from "~/@core/contracts/services/task/task";

export class RemoteUpdateTask {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) { }

    async run(data: EditTaskProps) {
        const token = localStorage.getItem('token') || '';

        try {
            const response = await this.axios.patch(`${this.url}/${data.id}/edit`, data, {
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