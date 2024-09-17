import express, {Express, Request, Response} from "express"
import cors from "cors";
import fetch from "cross-fetch";

let app: Express = express();
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        msg: "App working properly"
    })
})

app.post('/signin', async (req: Request, res: Response) => {
    try {
        const response = await fetch('http://localhost:8000/api/sign-in', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify( {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            }),
        });

        const data = await response.json(); 
        console.log(data);
        res.status(response.status).json(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});











app.listen(3000)