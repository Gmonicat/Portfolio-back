const mongoose = require('mongoose')
const validator = require('validator')


const clientsSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        validate:{
            validator:(value)=>{
                validator.isEmail(value);
            },
            message:'Invalid email address'
        }
    },
    phone:{
        type:String,
        validate:{
            validator:(value)=>{
                const numericValue = value.replace(/\D/g,'')
                return numericValue.length === 10;
            },
            message:'This website is not adapted for recieving worlwide phone numbers yet. It must be a phone number with 10 digits'
        }
    },
    date:{
        type:Date, 
        required:true
    },
    description:{
        type:String, 
        default:'No description'
    },
    
})

const Events = mongoose.model('client',clientsSchema)

module.exports = Events