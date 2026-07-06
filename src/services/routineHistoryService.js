import * as api from "../api/routineHistoryApi";

export const createHistory = async (data) =>
    (await api.createHistory(data)).data;

export const getHistories = async () =>
    (await api.getHistories()).data;

export const getHistory = async (id) =>
    (await api.getHistory(id)).data;

export const updateHistory = async (id, data) =>
    (await api.updateHistory(id, data)).data;

export const deleteHistory = async (id) =>
    (await api.deleteHistory(id)).data;