import {db} from "../db/db";
import {v4 as uuid} from 'uuid'
import {BlogDBType} from "../db/blog-types-db";
import {BodyTypeBlog} from "../types/request-response-type";

export const blogsRepositories = {
    createBlog: (blog: BodyTypeBlog) => {
        const newBlog: BlogDBType = {
            ...blog,
            id: uuid(),
        }
        db.blogs = [...db.blogs, newBlog];
        return newBlog.id;

    },
    findBlogById: (id: string) => {
        return db.blogs.find(b => b.id === id);
    },
    findAllBlogs: () => {
        return db.blogs;
    },
    updateBlog: (id: string, inputUpdateDataBlog: BodyTypeBlog) => {
        const {name, websiteUrl, description} = inputUpdateDataBlog

        const findBlog =  db.blogs.find(b => b.id === id);
        if(findBlog) {
            findBlog.name = name;
            findBlog.websiteUrl = websiteUrl;
            findBlog.description = description;
        }
        return true;
    },
    deleteBlog: (id: string) => {
        const deleteBlog = db.blogs.filter(b => b.id !== id);
        return !!deleteBlog;
    },
}