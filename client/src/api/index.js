import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signin = () => API.post("/user/signin")
    .catch((error) => {
        console.error("Error occurred during signin:", error);

        throw error;
    });

export const signup = (userInfo) => API.post("/user/signup", userInfo)
    .catch((error) => {
        console.error("Error occurred during signup:", error);

        throw error;
    });
