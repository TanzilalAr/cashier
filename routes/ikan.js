import { Router } from "express";
import { getAllIkan, getIkanById, postCreateIkan } from "../controller/ikan.js";

const ikanRouter = Router();

ikanRouter.get('/:id_ikan', getIkanById);
ikanRouter.get('/',getAllIkan)
ikanRouter.post('/',postCreateIkan)

export default ikanRouter;