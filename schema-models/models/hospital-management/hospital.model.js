import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    emergencyNum: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)
