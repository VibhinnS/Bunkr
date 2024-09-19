export interface ISignUpPayload {
    username: string,
    email: string,
    password: string
}

export interface ISignInPayload {
    username: string,
    password: string
}

export interface IForgotPasswordPayload {
    username: string,
    password: string
}