import mongoose from "mongoose";

const TruckSchema = new mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true
        },
        "Truck Status": {
            type: String,
            required: true
        },
        "Number Range": {
            type: String,
            required: true
        },
        "Vehicle": {
            type: String,
            required: true
        },
        "Garbage Type": {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Truck = mongoose.model('truck', TruckSchema);
export default Truck;