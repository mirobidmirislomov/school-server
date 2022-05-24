const express = require('express')
const router = express.Router()

const posts = require('./posts/posts')

router
    .get('/posts', posts.GET)
    .post('/addPost', posts.POST)
    .delete('/deletePost', posts.DEL)

module.exports = router