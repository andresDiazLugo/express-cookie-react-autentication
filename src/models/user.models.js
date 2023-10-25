import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        riquired: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model('User', userSchema)

