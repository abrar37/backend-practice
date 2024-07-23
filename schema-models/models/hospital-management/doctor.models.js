import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    contact: {
        type: true,
        required: true
    }
    
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)
