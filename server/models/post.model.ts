import { defineMongooseModel } from '#nuxt/mongoose'

export const Post = defineMongooseModel({
    name: 'Post',
    schema: {
        title: {
            type: 'string',
            required: true,
        },
        slug: {
            type: 'string',
            required: true,
        },
        content: {
            type: 'string',
            required: false,
        },
        thumbnail: { // sửa đúng chính tả từ "thumnail" thành "thumbnail"
            type: 'string',
            required: false,
        },
        seo_content: {
            type: 'string',
            required: false,
        },
        created_at: { // sửa đúng chính tả từ "create_at" thành "created_at"
            type: Date,
            required: true,
        },
    },

})
