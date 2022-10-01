import mongoose from "mongoose";

const TruckSchema = new mongoose.Schema(
    {
        truck_id: {
            type: String,
            required: true
        },
        garbage_type: {
            type: String,
            required: true
        },
        truck_capacity: {
            type: String,
            required: true
        },
        truck_status: {
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