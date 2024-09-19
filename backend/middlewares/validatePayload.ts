import { Request, Response, NextFunction } from 'express';
import { signup, signin, forgotPassword } from '../utils/database';

const validatePayload = (type: 'signup' | 'signin' | 'forgotPassword') => {
    return (req: Request, res: Response, next: NextFunction) => {
        let parsedPayload;

        switch (type) {
            case 'signup':
                parsedPayload = signup.safeParse(req.body);
                break;
            case 'signin':
                parsedPayload = signin.safeParse(req.body);
                break;
            case 'forgotPassword':
                parsedPayload = forgotPassword.safeParse(req.body);
                break;
        }

        if (!parsedPayload.success) {
            return res.status(400).json({
                msg: "Validation error.",
                errors: parsedPayload.error.errors
            });
        }

        next();
    };
};

export default validatePayload;
