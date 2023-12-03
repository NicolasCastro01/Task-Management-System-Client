import { RemoteCompleteTask } from "~/@core/application/usecase/task/remote-complete-task";
import axios from "~/@core/infra/axios/axios";

export function makeCompleteTask(): RemoteCompleteTask {
    return new RemoteCompleteTask(axios, '/tasks');
}