import express from "express";
import {HTTP_STATUSES} from "./settings";

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(HTTP_STATUSES.OK_200).send({
        message: "super"
    })
})