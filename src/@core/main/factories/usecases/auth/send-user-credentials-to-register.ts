import { RemoteSendUserCredentialsToRegister } from "~/@core/application/usecase/auth/remote-send-user-credentials-to-register";
import axios from "~/@core/infra/axios/axios";

export function makeSendUserCredentialsToRegister(): RemoteSendUserCredentialsToRegister {
    return new RemoteSendUserCredentialsToRegister(axios, '/auth/register');
}