import mongoose from "mongoose";

const TimeSlotSchema = new mongoose.Schema(
    {
        date:{
            type: String,
            required: true
        },
        slotTiming: {
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

const TimeSlot = mongoose.model('time_slot');
export default TimeSlot;