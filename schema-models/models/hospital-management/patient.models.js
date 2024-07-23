import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: ["Male", "Female", "Other"],
        required: true
    },
    blodGroup: {
        type: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-" ],
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    treatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
    
}, {timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)
