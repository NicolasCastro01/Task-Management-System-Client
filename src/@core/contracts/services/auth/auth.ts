export interface SignInResponse {
    auth_token: string;
}

export interface UserData {
    first_name: string;
    last_name: string;
    email: string;
    tasks: Task[];
}

interface Task {
    props: TaskProps;
    id: number;
    _user_ref: number;
}

interface TaskProps {
    title: string;
    description: string;
    status: Status;
    finish_at: string;
}

interface Status {
    props: StatusProps;
}

interface StatusProps {
    description: string;
}

export interface UserDataAPIResponse {
    firstName: string;
    lastName: string;
    email: string;
    tasks: TaskAPIResponse[];
}

interface TaskAPIResponse {
    props: TaskPropsAPIResponse;
    id: number;
    _userRef: number;
}

interface TaskPropsAPIResponse {
    title: string;
    description: string;
    status: StatusAPIResponse;
    finishAt: string;
}

interface StatusAPIResponse {
    props: StatusPropsAPIResponse;
}

interface StatusPropsAPIResponse {
    description: string;
}