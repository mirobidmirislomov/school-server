const { fetch } = require('../../utils/postgres')

const ALL_POSTS = `
    select * from posts
`

const ADD_POST = `
    insert into posts(post_title, post_text, post_img) values($1, $2, $3) returning *
`

const DEL_POST = `
    delete from posts where post_id = $1 returning *
`

const allPosts = () => fetch(ALL_POSTS)
const addPost = (post_title, post_text, post_img) => fetch(ADD_POST, post_title, post_text, post_img)
const delPost = (post_id) => fetch(DEL_POST, post_id)

module.exports = {
    allPosts,
    addPost,
    delPost
}