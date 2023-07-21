import axios from "axios";

const API = axios.create({ baseURL: "http://192.168.1.8:5000" });

/*
    API.interceptors.request.use((request) => {
        const profile = JSON.parse(AsyncStorage.getItem("userInfo"));

        if (profile && profile.token) {
            const token = profile.token.credential || profile.token;
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    });
*/

export const signin = (userInfo) => API.post("/user/signin", userInfo);
export const signup = (userInfo) => API.post("/user/signup", userInfo);

export const fetchGroups = () => API.get("/group/fetchGroups");