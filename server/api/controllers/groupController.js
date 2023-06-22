import Group from "../../models/group.js";

export const registerGroup = async (request, response) => {
    const groupInfo = request.body;

    const newGroup = new Group({ ...groupInfo });

    try {
        await newGroup.save();
        response.status(200).json({ message: "Group created successfully" });

    } catch (error) {
        response.status(409).json({ message: error });
    }
}