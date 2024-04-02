import express from "express";
import {HTTP_STATUSES, SETTINGS} from "./settings";
import {blogsRouter} from "./routes/blogs-router";

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(HTTP_STATUSES.OK_200).send({
        message: "super"
    })
})

app.use(SETTINGS.PATH.BLOGS, blogsRouter)