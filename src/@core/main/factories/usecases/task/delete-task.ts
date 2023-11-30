import { RemoteDeleteTask } from "~/@core/application/usecase/task/remote-delete-task";
import axios from "~/@core/infra/axios/axios";

export function makeDeleteTask(): RemoteDeleteTask {
    const token = localStorage.getItem('token') || '';

    return new RemoteDeleteTask(axios, '/tasks/', token);
}