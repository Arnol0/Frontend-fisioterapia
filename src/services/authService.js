import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/auth",
    headers: {
        "Content-Type": "application/json",
    },
});

export const registerUser = async (data) => {
    const response = await API.post("/register", data);
    return response.data;
};

export const loginUser = async (data) => {
    const response = await API.post("/login", data);
    return response.data;
};

export const getPerfil = async () => {

    const token = localStorage.getItem("token");

    const response = await API.get("/perfil", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};