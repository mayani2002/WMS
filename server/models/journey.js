import mongoose from "mongoose";

const JourneySchema = new mongoose.Schema(
    {
        journeyId: {
            type: String,
            required: true
        },
        truckId: {
            type: String,
            required: true
        },
        journeyLength: {
            type: String,
            required: true
        },
        approxJourneyTime: {
            type: String,
            required: true
        },
        depotLocation: {
            type: String,
            required: true
        },
        // path: {
            
        // }
    },
    {
        timestamps: true
    }
)

const Journey = mongoose.model('journey', JourneySchema);
export default Journey;