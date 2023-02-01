const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "node-api",
    {
        author: {
            type: String, 
            required: true
        }, 
        message : {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            required: false
        }
    },
    "posts"
);

module.exports = { PostsModel };