const React = require('react')
const ReactDOMServer = require('react-dom/server')
const express = require('express')
const router = express.Router()

const Counter = require('./component/Counter.jsx')

router.get('/', function(req, res){
    res.render('index', { app: ReactDOMServer.renderToString(<Counter />) })
})

module.exports = router
