import { getUser } from "../models/user.models.js";


export const tarea_create =(req, res) =>{
  getUser.User.create(
    {
      titulo:req.body.titulo,
      descripcion:req.body.descripcion,
      
    },
    { fields: ["titulo", "descripcion"] }


  )
  .then(() => {
    res.send("creado");
  })
  .catch((err) => {
    res.status(400).send(err);
  });
};

export const getTareas = (_, res) => {
  getUser.User.findAll() // Busca todos los registros en la tabla User
    .then((tareas) => {
      res.status(200).json(tareas); // Devuelve las tareas en formato JSON
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const getTareaPorId = (req, res) => {
  const tareaId = req.params.id; // Obtén el ID de los parámetros de la solicitud

  getUser.User.findByPk(tareaId) // Busca una tarea por su ID
    .then((tarea) => {
      if (!tarea) {
        return res.status(404).json({ mensaje: "Tarea no encontrada" });
      }
      res.status(200).json(tarea); // Devuelve la tarea en formato JSON
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};


export const actualizarEstadoTarea = (req, res) => {
  const tareaId = req.params.id; // Obtén el ID de los parámetros de la solicitud

  getUser.User.findByPk(tareaId) // Busca la tarea por su ID
    .then((tarea) => {
      if (!tarea) {
        return res.status(404).json({ mensaje: "Tarea no encontrada" });
      }

      if (tarea.estadoTarea) {
        return res.status(400).json({ mensaje: "La tarea ya ha sido completada" });
      }

      // Actualiza el campo estadoTarea a true
      tarea.update({ estadoTarea: true })
        .then(() => {
          res.status(200).json({ mensaje: "Estado de tarea actualizado a true" });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const eliminarTarea = (req, res) => {
  const tareaId = req.params.id; // Obtén el ID de los parámetros de la solicitud

  getUser.User.findByPk(tareaId) // Busca la tarea por su ID
    .then((tarea) => {
      if (!tarea) {
        return res.status(404).json({ mensaje: "Tarea no encontrada" });
      }

      if (tarea.estadoEliminacion) {
        return res.status(400).json({ mensaje: "La tarea ya ha sido marcada como eliminada" });
      }

      // Actualiza el campo estadoEliminacion a true
      tarea.update({ estadoEliminacion: true })
        .then(() => {
          res.status(200).json({ mensaje: "Tarea marcada como eliminada" });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const getTareasNoEliminadas = (_, res) => {
  getUser.User.findAll({
    where: { estadoEliminacion: false } // Filtra por tareas no eliminadas
  })
    .then((tareas) => {
      res.status(200).json(tareas); // Devuelve las tareas no eliminadas en formato JSON
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};





