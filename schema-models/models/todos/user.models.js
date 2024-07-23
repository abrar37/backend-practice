import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true,
            min: [6, 'Must be at least 6, got {VALUE}']
        }
        
    }, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)

