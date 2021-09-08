const express = require('express')

const QuestionController = require('./controllers/QuestionControler')

const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-hall', (req,res) => res.render("index", {page: 'create-hall'})) 
//render de partes não funcionou como deveria, retornei ao estado anterior
route.get('/room/:room', (req, res) => res.render("room"))

//Formato que o formulário de dentro da modal precisa para passar a informação
route.post('/room/:room/:question/:action', QuestionController.index)

route.post ('/room/:create-room', RoomController.create)

module.exports = route