import mongoose from "mongoose";

const PickUpRequestSchema = new mongoose.Schema(
    {
        requestId:{
            type: String,
            required: true
        },
        requestStatus: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        timeSlotNo: {
            type: Number,
            required: true
        },
        pickUpAddress: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: false
        },
        longitude: {
            type: Number,
            required: false
        },
        garbageType: {
            type: String,
            required: true
        },
        approxGarbageWeight: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const PickUpRequest = mongoose.model('pickup_request', PickUpRequestSchema);
export default PickUpRequest;