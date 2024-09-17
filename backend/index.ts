import express, {Express, Request, response, Response} from "express"
import cors from "cors";
import { signin } from "./database";
import { ISignInPayload } from "./interfaces";
import fetch from "cross-fetch";

let app: Express = express();
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        msg: "App working properly"
    })
})

app.post('/signup', async (req: Request, res: Response) => {
    const signInPayload: ISignInPayload = req.body;
    const payloadParse = signin.safeParse(signInPayload);

    if (!payloadParse.success) {
        res.status(404).json({
            msg: "Couldn't sign in. Provided credentials are incorrect!"
        })
    } else {
        try {
            const response = await fetch('http://localhost:8000/api/sign-up/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                }),
            });
    
            const data = await response.json();
            if (response.status === 201) {
                res.json({
                    status: 201,
                    msg: "User created successfully!"
                })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});











app.listen(3000)