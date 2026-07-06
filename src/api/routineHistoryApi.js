import api from "./api";

export const createHistory = (data) =>
    api.post("/routine-histories", data);

export const getHistories = () =>
    api.get("/routine-histories");

export const getHistory = (id) =>
    api.get(`/routine-histories/${id}`);

export const updateHistory = (id, data) =>
    api.put(`/routine-histories/${id}`, data);

export const deleteHistory = (id) =>
    api.delete(`/routine-histories/${id}`);