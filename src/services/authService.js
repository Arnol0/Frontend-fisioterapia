import * as authApi from "../api/authApi";

export const registerUser = async (data) => {

    const response = await authApi.register(data);

    return response.data;

};

export const loginUser = async (data) => {

    const response = await authApi.login(data);

    return response.data;

};

export const getPerfil = async () => {

    const response = await authApi.perfil();

    return response.data;

};