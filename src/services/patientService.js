import * as patientApi from "../api/patientApi";

export const createPatient = async (data) => {

    const response = await patientApi.createPatient(data);

    return response.data;

};

export const getPatients = async () => {

    const response = await patientApi.getPatients();

    return response.data;

};

export const getPatient = async (id) => {

    const response = await patientApi.getPatient(id);

    return response.data;

};

export const updatePatient = async (id, data) => {

    const response = await patientApi.updatePatient(id, data);

    return response.data;

};

export const deletePatient = async (id) => {

    const response = await patientApi.deletePatient(id);

    return response.data;

};