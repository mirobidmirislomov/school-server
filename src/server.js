const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const moment = require('moment')

moment.locale('uz-latn')

const cors = require('cors')
app.use(cors())
app.use(express.json())

const router = require('./modules/index')
app.use(router)

app.listen(PORT, ()=> {
    console.log(PORT);
})