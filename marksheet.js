
module.exports=(sequelize,Sequelize)=>{

    const Marksheet = sequelize.define("marksheet",{
            
        id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        mark : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    });
    return Marksheet;
}