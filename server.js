require('babel-core/register')

const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./router.js')
const app = express()

app.engine('handlebars', handlebars({defaultLayout: false}))
app.set('view engine', 'handlebars');
app.use(router)

app.listen(8090, function(){
    console.log('Listening on PORT:8090')
})
