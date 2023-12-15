import ikan from "../models/ikan.js";

export const findAllIkan = async() => {
    return await ikan.findAll();
};

export const findIkanById = async(id_ikan) => {
    return await ikan.findOne({where : {id_ikan}});
}

export const createIkan = async (id_ikan, nama_ikan) => {
    return await ikan.create({
        id_ikan, nama_ikan
    })
};