const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const path = require('path');
var router = require("./router/index")
app.set("view enging","ejs");
app.use(express.json())  // request body를 사용하기 위함
app.use(express.static('public')) 

app.use(cors())

app.get('/', function(req, res) {
    console.log(path.join(__dirname,"/../public/index.ejs"))
 
    res.render(path.join("index.ejs"))

})
app.listen(port, () => console.log(`Example app listening on port port!`))
app.use(router)
