export class UserCredentialsRequestDTO {
    public readonly email: string;
    public readonly password: string;

    private constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    static create(email: string, password: string): UserCredentialsRequestDTO {
        return new UserCredentialsRequestDTO(email, password);
    }
}

interface UserCredentialsRegisterProps {
    first_name: string, 
    last_name: string, 
    email: string, 
    password: string
}

interface CreateUserCredentialsRegisterProps extends UserCredentialsRegisterProps {}

export class UserCredentialsRegisterRequestDTO {
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly email: string;
    public readonly password: string;

    private constructor(props: UserCredentialsRegisterProps) {
        this.firstName = props.first_name;
        this.lastName = props.last_name;
        this.email = props.email;
        this.password = props.password;
    }

    static create(props: CreateUserCredentialsRegisterProps): UserCredentialsRegisterRequestDTO {
        return new UserCredentialsRegisterRequestDTO(props);
    }
}