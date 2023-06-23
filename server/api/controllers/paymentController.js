import Payment from "../../models/payment.js";

import { getDateTime } from "../../helpers/getDateTime.js";

export const processPayment = async (request, response) => {
    const { userId, amount } = request.body;

    try {
        const currentDateAPI = await getDateTime();
        const currentDate = new Date(currentDateAPI);

        const dueDateAPI = currentDateAPI.add(31, "days").format("YYYY-MM-DD");
        const dueDate = new Date(dueDateAPI);

        let payment = await Payment.findOne({ user_id: userId });

        if (!payment) {
            payment = new Payment({
                user_id: userId,
                amount: amount,
                due_date: dueDate,
                status: "PAID",
                payment_history: [
                    { date: currentDate, amount: amount }
                ],
            });

        } else {
            payment.amount = amount;
            payment.due_date = dueDate;
            payment.status = "PAID";
            payment.payment_history.push(
                { date: currentDate, amount: amount }
            );
        }

        await payment.save();

        response.status(200).json({ message: "Payment processed successfully" });

    } catch (error) {
        response.status(500).json({ message: "Error processing payment" });
    }
};