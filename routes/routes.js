const express = require('express')
const eventsRouter = express.Router()

const eventsController = require('../controllers/contactsController')

eventsRouter.get('/contact', eventsController.getContacts)
eventsRouter.post('/contact', eventsController.addContact)
eventsRouter.put('/contact', eventsController.updateContact)
eventsRouter.delete('/contact', eventsController.deleteContact)




module.exports= eventsRouter