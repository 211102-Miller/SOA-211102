import Sequelize  from "sequelize";
import {db} from './config.js'


const sequelize  = new Sequelize( db.database, db.user, db.password,{
    host: db.host,
    dialect: 'mysql' 
});

sequelize.sync({ alert: true })
    .then(() => {
        console.log('Conectado')
    })
    .catch((err) => {
        console.log('No se conecto', err)
    });

export const getData = { sequelize };

