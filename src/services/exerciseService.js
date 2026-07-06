import * as api from "../api/exerciseApi";

export const createExercise = async (data) =>
    (await api.createExercise(data)).data;

export const getExercises = async () =>
    (await api.getExercises()).data;

export const getExercise = async (id) =>
    (await api.getExercise(id)).data;

export const updateExercise = async (id, data) =>
    (await api.updateExercise(id, data)).data;

export const deleteExercise = async (id) =>
    (await api.deleteExercise(id)).data;