import {config} from "dotenv";

config();

export const SETTINGS = {
    PORT: process.env.PORT || 3000,
    PATH: {
        BLOGS: '/ht_02/api/blogs',
        POSTS: '/ht_02/api/posts',
        ALL_DELETE: '/ht_02/api/testing'
    }
}

export const HTTP_STATUSES = {
    OK_200: 200,
    NOT_FOUND_404: 404,
    NO_CONTENT_204: 204,
    CREATED_201: 201,
    BED_REQUEST_400: 400,
    UNAUTHORIZED: 401
}