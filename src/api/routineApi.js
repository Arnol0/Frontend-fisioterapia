import api from "./api";

export const createRoutine = (data) =>
    api.post("/routines", data);

export const getRoutines = () =>
    api.get("/routines");

export const getRoutine = (id) =>
    api.get(`/routines/${id}`);

export const updateRoutine = (id, data) =>
    api.put(`/routines/${id}`, data);

export const deleteRoutine = (id) =>
    api.delete(`/routines/${id}`);