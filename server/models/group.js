import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    max_capacity: {
        type: Number,
        required: true,
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User",
    }],
    waitlist: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User",
    }],
});

const Group = mongoose.model("Group", groupSchema);

export default Group;