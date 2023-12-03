export interface SignInResponse {
    auth_token: string;
}

export interface UserData {
    first_name: string;
    last_name: string;
    email: string;
}

export interface Task {
    props: TaskProps;
    id: number;
    _user_ref: number;
}

export interface TaskProps {
    id: number;
    title: string;
    description: string;
    status: Status;
    finishAt: string;
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

export interface TaskAPIResponse {
    props: TaskPropsAPIResponse;
    id: number;
    _userRef: number;
}

export interface TaskPropsAPIResponse {
    title: string;
    description: string;
    status: StatusAPIResponse;
    finishAt: string;
}

export interface StatusAPIResponse {
    props: StatusPropsAPIResponse;
}

interface StatusPropsAPIResponse {
    description: string;
}