import { Axios } from "axios";
import { SignInResponse } from "~/@core/contracts/services/auth/auth";
import { UserCredentialsRequestDTO } from "~/@core/dtos/Request/auth/auth";

export class RemoteSendUserCredential {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) {}

    async run(credentials: UserCredentialsRequestDTO): Promise<SignInResponse> {
        try {
            const authorizationToken = await this.axios.post(this.url, credentials);
            
            return authorizationToken.data as SignInResponse;
        } catch (error) {
            throw new Error("User not found.")
        }
    }
}