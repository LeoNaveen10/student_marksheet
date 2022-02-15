/**
 * link everything here
 */
const config = require("../config/dbconfig");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD,
    {
        HOST: config.HOST,
        dialect: config.dialect
    }
)
const db={};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.marksheet = require("../models/marksheet")(sequelize,Sequelize);
db.student = require("../models/student")(sequelize,Sequelize);

module.exports = db;

