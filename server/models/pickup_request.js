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
        timeSlot: {
            type: String,
            required: true
        },
        pickUpAddress: {
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