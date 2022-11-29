import { Router } from "express";
import { getEquipos, getEquipo, createEquipo, updateEquipo, deleteEquipo  } from "../controllers/equipos.controller.js";

const route = Router();

route.get('/equipos', getEquipos);
route.get('/equipo/:id', getEquipo);
route.post('/equipos', createEquipo);
route.patch('/equipo/:id', updateEquipo);
route.delete('/equipo/:id', deleteEquipo);

export default route;