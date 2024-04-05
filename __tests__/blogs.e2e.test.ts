import {req} from "./test-helpers";
import {HTTP_STATUSES} from "../src/settings";
import {SETTINGS} from "../src/settings";

import {setBlogDB, setPostDB} from "../src/db/db";
import {dataset} from "./dataset";
import {describe} from "node:test";
import {InputBlogType} from "../src/types/input-blog-type";


const authHeader = 'Basic YWRtaW46cXdlcnR5';

describe('/blogs', () => {
    beforeAll(async () => {
        await req.delete(SETTINGS.PATH.ALL_DELETE + '/all-data')
    })
    it('should get empty array', async () => {
        const res = await req.get(SETTINGS.PATH.BLOGS).expect(HTTP_STATUSES.OK_200)
    });
    it('should get not empty array', async () => {
        setBlogDB(dataset.blogs)
        const res = await req.get(SETTINGS.PATH.BLOGS).expect(HTTP_STATUSES.OK_200);
        expect(res.body.length).toBe(1);
        expect(res.body[0]).toEqual(dataset.blogs[0])
    });
    it('shouldn\'t be create blog (with correct data), as be out authorization header', async () => {
        const newBlog: InputBlogType = {
            name: 'test',
            websiteUrl: 'https://it-incubator.com',
            description: 'description'
        }
        const res = await req.post(SETTINGS.PATH.BLOGS).send(newBlog).expect(HTTP_STATUSES.UNAUTHORIZED)
    });
    it('should be create blog with correct data and authorization header', async () => {
        const newBlog: InputBlogType = {
            name: 'test',
            websiteUrl: 'https://it-incubator.com',
            description: 'description'
        }
        const res = await req.post(SETTINGS.PATH.BLOGS).set('Authorization', authHeader).send(newBlog).expect(HTTP_STATUSES.CREATED_201)
    });
    it('shouldn\'t be create blog with authorization header, but not correct data: field name length more 15 symbol', async () => {
        const newBlog: InputBlogType = {
            name: 'teerwerwetrertertertertrertertert',
            websiteUrl: 'https://it-incubator.com',
            description: 'description'
        }
        const res = await req.post(SETTINGS.PATH.BLOGS).set('Authorization', authHeader).send(newBlog).expect(HTTP_STATUSES.BED_REQUEST_400)
    });
})