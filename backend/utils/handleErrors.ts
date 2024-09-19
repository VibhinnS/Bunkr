import { Response } from "express";
export const handleErrors = (error: any, res: Response) => {
    console.error(error);
    res.json({
        msg: "Internal Server Error"
    })
};
