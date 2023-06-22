import Payment from "../../models/payment.js";

import { getDateTime } from "../../helpers/getDateTime.js";

export const processInitialPayment = async (request, response) => {
    const { userId, amount } = request.body;

    try {
        const existingPayment = await Payment.findOne({ user_id: userId });
        if (existingPayment) {
            return response.status(403).json({ message: "Payment record already exists for this user" });
        }

        const currentDateAPI = await getDateTime();
        const currentDate = new Date(currentDateAPI);

        const dueDateAPI = currentDateAPI.add(31, "days").format("YYYY-MM-DD");
        const dueDate = new Date(dueDateAPI);

        const payment = new Payment({
            user_id: userId,
            amount: amount,
            due_date: dueDate,
            status: "PAID",
            payment_history: [{ date: currentDate, amount: amount }],
        });

        await payment.save();

        response.status(200).json({ message: "Initial payment created successfully" });

    } catch (error) {
        response.status(500).json({ message: "Error creating initial payment" });
    }
};

export const registerPayment = async (request, response) => {

};