const model = require('./model.js')
const moment = require('moment')

module.exports = {
    GET: async (req, res) => {
        try {   
            const data = await model.allPosts()
            res.json(data.filter(e => e.post_created_at = moment(e.post_created_at).format('MMMM Do YYYY, h:mm:ss a')))
        } catch(err) {
            console.log(err.message);
            res.sendStatus(500)
        }
    },
    POST: async(req, res) => {
        try {
            const { post_title, post_text } = req.body
            res.json(model.addPost(post_title, post_text))
        }catch(err) {
            console.log(err.message);
            res.sendStatus(500)
        }
    },
    DEL: async(req, res) => {
        try {
            const { post_id } = req.body
            res.json(model.delPost(post_id))
        }catch(err) {
            console.log(err.message);
            res.sendStatus(500)
        }
    }
}