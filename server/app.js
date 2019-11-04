const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
var router = require("./router/index")
app.use(cors())

//app.get('/', (req, res) => res.render("/index"))
app.listen(port, () => console.log(`Example app listening on port port!`))
app.use(router)
