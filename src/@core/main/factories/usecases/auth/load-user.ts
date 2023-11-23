import { RemoteLoadUser } from "~/@core/application/usecase/auth/remote-load-user";
import axios from "~/@core/infra/axios/axios";

export function makeLoadUser(): RemoteLoadUser {
    return new RemoteLoadUser(axios, '/user/data');
}