import api from "./api";

export const createExercise = (data) =>
    api.post("/exercises", data);

export const getExercises = () =>
    api.get("/exercises");

export const getExercise = (id) =>
    api.get(`/exercises/${id}`);

export const updateExercise = (id, data) =>
    api.put(`/exercises/${id}`, data);

export const deleteExercise = (id) =>
    api.delete(`/exercises/${id}`);