import { Axios } from "axios";
import { SignInResponse } from "~/@core/contracts/services/auth/auth";
import { UserCredentialsRegisterRequestDTO, UserCredentialsRequestDTO } from "~/@core/dtos/Request/auth/auth";
import { HttpStatusCodeEnum } from "~/@core/infra/http/protocols/http-status-code.enum";

export class RemoteSendUserCredentialsToRegister {
    constructor(
        private readonly axios: Axios,
        private readonly url: string
    ) {}

    async run(credentials: UserCredentialsRegisterRequestDTO): Promise<string> {
        try {
            const registerResponse = await this.axios.post(this.url, this.parseBody(credentials));
            
            return HttpStatusCodeEnum[registerResponse.status];
        } catch (error) {
            throw new Error("Internal error.")
        }
    }

    private parseBody({firstName: first_name, lastName: last_name, ...rest}: UserCredentialsRegisterRequestDTO) {
        return {
            first_name,
            last_name,
            ...rest
        }
    }
}