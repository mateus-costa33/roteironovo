const express = require("express");
const nunjucks = require("nunjucks");


const server = express();

server.set('view engine', '.njk')


server.get("/", (req, res) => {
    res.render('locais/index.njk', { name: "Mateus Santos" })
})


nunjucks.configure('src/views', {
    express: server,
    autoescape: true,
    watch: true
})


server.listen(8080)