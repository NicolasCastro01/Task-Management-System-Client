import { Axios } from "axios";

export class RemoteCompleteTask {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) { }

    async run(id: number) {
        const token = localStorage.getItem('token') || '';

        try {
            const response = await this.axios.patch(`${this.url}/${id}/complete`, {}, {
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