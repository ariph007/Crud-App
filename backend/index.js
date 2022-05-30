import express from "express"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"

const app = express();
//* Express app menggunakan cors agar api dapat di akses
app.use(cors());
//* express.json() agar dapat menerima request dalam bentuk json
app.use(express.json());
app.use(UserRoute);

//* Listen port express server 5000, callback fn 'Server up...'
app.listen(5000, () => console.log('Server up dan running...'))
