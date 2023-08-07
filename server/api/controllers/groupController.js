import Group from "../../models/group.js";

export const fetchGroups = async (request, response) => {
    try {
        const groupList = await Group.find();
        response.status(200).json(groupList);

    } catch (error) {
        response.status(409).json({ message: error });
    }
};

export const registerGroup = async (request, response) => {
    const groupInfo = request.body;

    const newGroup = new Group({ ...groupInfo });

    try {
        await newGroup.save();
        response.status(200).json({ message: "GroupList created successfully" });

    } catch (error) {
        response.status(409).json({ message: error });
    }
};