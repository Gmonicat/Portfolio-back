const events = ['','','']

const Clients = require('../models/contactsModel')

const clientsController = {

    getContacts:(req,res)=>{{
        res.json({
            mensaje:'Eventos:',
            events:events
        })
    }},

    addContact:(req,res)=>{
        res.send(('Adding new contact request'))//req.body
    },
    updateContact:(req,res)=>{
        res.send(('Updating an existing contact'))//req.body
    },
    deleteContact:(req,res)=>{
        res.send(('Deleting contact'))//req.body
    }
}

module.exports = clientsController