import mongoose from "mongoose";

const CitizenSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Citizen = mongoose.model('citizen', CitizenSchema);
export default Citizen;