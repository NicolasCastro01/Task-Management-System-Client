import { TaskPropsAPIResponse } from "../auth/auth";

export interface CreateTaskProps {
    title: string;
    description: string;
    finish_at: Date;
}

export interface EditTaskProps {
    id: number;
    title: string;
    description: string;
    finishAt: Date;
};