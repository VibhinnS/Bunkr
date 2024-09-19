import express, { Express } from 'express';
import cors from "cors";
import authRoutes from './routes/authRoutes';

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use('/api', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`);
})