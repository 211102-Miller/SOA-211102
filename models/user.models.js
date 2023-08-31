import { getData } from "../config/conection.config.js";
import { DataTypes } from "sequelize";

const User = getData.sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un titulo",
            },
        },
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "ingrese una descripcion",
            },
        },
    },
    estadoTarea: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Establece false como valor por defecto
        validate: {
            notNull: {
                msg: "Falta el estado",
            },
        },
    },
    estadoEliminacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Establece false como valor por defecto
        validate: {
            notNull: {
                msg: "Flata la fecha de creacion",
            },
        },
    }
});

export const getUser = { User };
