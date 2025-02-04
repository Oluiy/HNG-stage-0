import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT|| 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    const responseData = {
        email: "akinboyewaiyanuoluwa15@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Oluiy/HNG-stage-0",
    };
    res.status(200).json(responseData);
    } 
);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    console.log(`go to http://localhost:${PORT}`);
})