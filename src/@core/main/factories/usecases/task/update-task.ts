import { RemoteUpdateTask } from "~/@core/application/usecase/task/remote-update-task";
import axios from "~/@core/infra/axios/axios";

export function makeUpdateTask(): RemoteUpdateTask {
    return new RemoteUpdateTask(axios, '/tasks');
}