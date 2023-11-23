import { RemoteSendUserCredential } from "~/@core/application/usecase/auth/remote-send-user-credential";
import axios from "~/@core/infra/axios/axios";

export function makeSendUserCredential(): RemoteSendUserCredential {
    return new RemoteSendUserCredential(axios, '/auth/login');
}