import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Group from "../../models/group.js";
import Payment from "../../models/payment.js";
import User from "../../models/user.js";

const secret = "Y8bD7rK2sF9aZ1";

export const enrollStudentInGroup = async (request, response) => {
    const { userId, groupId } = request.body;

    try {
        const group = await Group.findById(groupId);
        if (!group) {
            return response.status(404).json({ message: "Groups not found" });
        }

        const payment = await Payment.findOne({ user_id: userId, status: "PAID" });
        if (!payment) {
            return response.status(403).json({ message: "User must have a paid membership to enroll in a group" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        if (group.participants.length >= group.max_capacity) {
            return response.status(403).json({ message: "Groups is full. User can be added to the waitlist" });
        }

        // Add the group ID to the user's groups array
        user.groups.push(groupId);
        await user.save();

        // Add the user to the group's participants
        group.participants.push(userId);
        await group.save();

        response.status(200).json({ message: "User successfully enrolled in the group" });

    } catch (error) {
        response.status(500).json({ message: "Failed to enroll user in the group" });
    }
}

export const signin = async (request, response) => {
    const { email, password } = request.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return response.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return response.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });

        response.status(200).json({ result: existingUser, token });

    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
}

export const signup = async (request, response) => {
    const { name, email, password } = request.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return response.status(400).json({ message: "User already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({ name, email, password: hashedPassword, });

        const token = jwt.sign(
            { email: newUser.email, id: newUser._id }, secret, { expiresIn: "1h" });

        response.status(201).json({ result: newUser, token });

    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
};