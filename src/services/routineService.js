import * as api from "../api/routineApi";

export const createRoutine = async (data) =>
    (await api.createRoutine(data)).data;

export const getRoutines = async () =>
    (await api.getRoutines()).data;

export const getRoutine = async (id) =>
    (await api.getRoutine(id)).data;

export const updateRoutine = async (id, data) =>
    (await api.updateRoutine(id, data)).data;

export const deleteRoutine = async (id) =>
    (await api.deleteRoutine(id)).data;