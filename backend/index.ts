import express, {Express, Request, Response} from "express"
import cors from "cors";

let app: Express = express();
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        msg: "App working properly"
    })
})

app.listen(3000)