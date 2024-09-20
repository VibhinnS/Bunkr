import { Request, Response } from 'express';
import { signUpService, signInService, forgotPasswordService } from '../services/authService';

export const signup = async (req: Request, res: Response) => {
    try {
        const response = await signUpService(req.body);
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const signin = async (req: Request, res: Response) => {
    try {
        const response = await signInService(req.body);
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const forgotPassword = async (req: Request, res: Response) => {
    try {
        const response = await forgotPasswordService(req.body);
        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const posts = (): null => {
    return null;
}