import {req} from "./test-helpers";
import {HTTP_STATUSES} from "../src/settings";
import {SETTINGS} from "../src/settings";

import {setBlogDB, setPostDB} from "../src/db/db";
import {dataset} from "./dataset";
import {describe} from "node:test";

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
})