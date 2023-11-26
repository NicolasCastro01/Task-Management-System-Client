import { RemoteSendTask } from "~/@core/application/usecase/task/remote-send-task";
import axios from "~/@core/infra/axios/axios";

export function makeSendTask(): RemoteSendTask {
    return new RemoteSendTask(axios, '/tasks/create');
}