import * as api from "../api/physiotherapistApi";

export const createPhysiotherapist = async (data) =>
    (await api.createPhysiotherapist(data)).data;

export const getPhysiotherapists = async () =>
    (await api.getPhysiotherapists()).data;

export const getPhysiotherapist = async (id) =>
    (await api.getPhysiotherapist(id)).data;

export const updatePhysiotherapist = async (id, data) =>
    (await api.updatePhysiotherapist(id, data)).data;

export const deletePhysiotherapist = async (id) =>
    (await api.deletePhysiotherapist(id)).data;