enum PayloadType {
    SignUp = 'signup',
    SignIn = 'signin',
    ForgotPassword = 'forgotPassword',
    Posts = 'posts'
}

interface SignUpPayload {
    username: string;
    password: string;
    email: string;
}

interface SignInPayload {
    username: string;
    password: string;
}

interface ForgotPasswordPayload {
    username: string;
    password: string;
    new_password: string;
}

export { PayloadType, SignUpPayload, SignInPayload, ForgotPasswordPayload };
