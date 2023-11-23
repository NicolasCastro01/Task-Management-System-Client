import { RemoteLoadTasks } from "~/@core/application/usecase/task/remote-load-tasks";
import axios from "~/@core/infra/axios/axios";

export function makeLoadTasks(): RemoteLoadTasks {
    return new RemoteLoadTasks(axios, '/tasks');
}