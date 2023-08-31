import express from "express";
import { tarea_create,getTareas, getTareaPorId,actualizarEstadoTarea, eliminarTarea,getTareasNoEliminadas } from "../controllers/user.js";

const router = express.Router();

router.post("/post", tarea_create)
router.get("/getTareas", getTareas)
router.get("/getIdTareas/:id", getTareaPorId)
router.put('/tareas/:id/actualizar-estado', actualizarEstadoTarea);
router.put('/tareas/:id/eliminar', eliminarTarea);
router.get('/tareas-no-eliminadas', getTareasNoEliminadas);





export default router;