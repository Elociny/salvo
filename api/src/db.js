

import initdb from './models/init-models.js';

// import initdb from './models/tb_lista_negra.js'

import Sequelize from 'sequelize';
const sequelize = new Sequelize(
    'mysql_17753_nsftcc',
    'nsftcc',
    'nsf@tcc', {
    host: 'my01.winhost.com',
    dialect: 'mysql',
    logging: false
});

const db = initdb(sequelize);
export default db;