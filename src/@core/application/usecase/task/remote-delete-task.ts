import { Axios } from "axios";

export class RemoteDeleteTask {
    constructor(
        private readonly axios: Axios,
        private readonly url: string,
        private readonly token: string
    ) { }

    async run(taskId: number): Promise<number> {
        try {
            const response = await this.axios.delete(`${this.url}/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });

            return response.status;
        } catch (error) {
            throw error;
        }
    }
}