import express, {Express, Request, response, Response} from "express"
import cors from "cors";
import { signup, signin } from "./database";
import { ISignUpPayload, ISignInPayload } from "./interfaces";
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
    const signUpPayload: ISignUpPayload = req.body;
    const parsedPayload = signup.safeParse(signUpPayload);

    if (!parsedPayload.success) {
        res.status(404).json({
            msg: "Couldn't sign in. Incorrect details provided!"
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



app.post('/signin', async (req: Request, res: Response) => {
    const signInPayload: ISignInPayload = req.body;
    const parsedPayload = signin.safeParse(signInPayload);

    console.log(parsedPayload);

    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "Couldn't sign in. Provided credentials are incorrect!",
            errors: parsedPayload.error.errors
        });
    }

    try {
        const response = await fetch('http://localhost:8000/api/login/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: req.body.username,
                password: req.body.password,
            }),
        });

        if (response.ok) {
            res.json({
                status: 200,
                msg: "Logged In Successfully!"
            });
        } else {
            // Handle API error responses
            const errorData = await response.json();
            res.status(response.status).json({
                msg: "Failed to log in.",
                error: errorData
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(3000)