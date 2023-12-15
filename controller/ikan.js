import express, {request, response}  from "express";
import { findAllIkan, createIkan, findIkanById } from "../services/ikan.js";
import { httpStatusMessage } from "../constants/httpStatusMessage.js";

/**
 * @param {express.Request} request
 * @param {express.Respone} response
 */
export const getAllIkan = async (request, response) => {
    const ikan = await findAllIkan();
    response.json({
        data : ikan,
        message : httpStatusMessage[response.status]
    });
};

export const getIkanById = async (request, response) => {
    const {id_ikan} = request.params;
    const ikan = await findIkanById(id_ikan);

    response.json({
        data : ikan,
        message : httpStatusMessage[response.status]
    });
}

export const postCreateIkan = async (request, response) => {
    const {id_ikan, nama_ikan} = request.body;
    const ikan = await createIkan(id_ikan, nama_ikan);

    response.json({
        data : ikan,
        message : httpStatusMessage[response.status]
    });
}