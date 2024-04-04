import {BlogDBType} from "../src/db/blog-types-db";
import {PostDBType} from "../src/db/post-types-db";
import {DBType} from "../src/db";

export const blog: BlogDBType = {
    id: "1c8c3224-fc45-4198-ac48-6aac80b5dc10",
    name: 'blog test',
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.',
    websiteUrl: 'https://example.com'
}

export const post: PostDBType = {
    id: "020bf320-fb6f-4968-8820-664c3288c577",
    content: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, ' +
        'но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.',
    title: 'test post',
    shortDescription: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов',
    blogName: 'blog test',
    blogId: '1c8c3224-fc45-4198-ac48-6aac80b5dc10'
}

export const dataset: DBType = {
    posts: [post],
    blogs: [blog]
}