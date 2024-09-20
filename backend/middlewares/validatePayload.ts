import { Request, Response, NextFunction } from 'express';
import { signup, signin, forgotPassword } from '../utils/database';
import PayloadType from '../utils/payloadTypes';

const validatePayload = (type: PayloadType) => {
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
            case 'posts':

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
