import mongoose from "mongoose";

const CitizenSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Citizen = mongoose.model('citizen', CitizenSchema);
export default Citizen;