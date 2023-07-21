import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Group",
    }],
});

const User = mongoose.model("User", userSchema);

export default User;