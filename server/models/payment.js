import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    due_date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["PAID", "PENDING", "OVERDUE"],
        required: true,
    },
    payment_history: [{
        date: {
            type: Date,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    }],
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;