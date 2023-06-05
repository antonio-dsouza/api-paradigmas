import express from "express";
import http from "http";
import cors from "cors";
import { router } from "./routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
// app.options('*', cors())

const serverHttp = http.createServer(app);

app.use(express.json());

app.use(router);

export { serverHttp };