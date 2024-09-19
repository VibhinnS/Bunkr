import fetch from 'cross-fetch';

export const signUpService = async (payload: any) => {
    const response = await fetch(`${process.env.AUTH_API_URL}/sign-up/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        return { status: 201, data: { msg: 'User created successfully!' } };
    } else {
        const errorData = await response.json();
        return { status: response.status, data: { msg: 'Failed to sign up.', error: errorData } };
    }
};

export const signInService = async (payload: any) => {
    const response = await fetch(`${process.env.AUTH_API_URL}/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        return { status: 200, data: { msg: 'Logged In Successfully!' } };
    } else {
        const errorData = await response.json();
        return { status: response.status, data: { msg: 'Failed to log in.', error: errorData } };
    }
};

export const forgotPasswordService = async (payload: any) => {
    const response = await fetch(`${process.env.AUTH_API_URL}/forgot-password/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        return { status: 200, data: { msg: 'Password changed Successfully!' } };
    } else {
        const errorData = await response.json();
        return { status: response.status, data: { msg: 'Failed to change password.', error: errorData } };
    }
};
