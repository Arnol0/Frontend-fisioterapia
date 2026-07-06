import api from "./api";

export const createPhysiotherapist = (data) =>
    api.post("/physiotherapists", data);

export const getPhysiotherapists = () =>
    api.get("/physiotherapists");

export const getPhysiotherapist = (id) =>
    api.get(`/physiotherapists/${id}`);

export const updatePhysiotherapist = (id, data) =>
    api.put(`/physiotherapists/${id}`, data);

export const deletePhysiotherapist = (id) =>
    api.delete(`/physiotherapists/${id}`);