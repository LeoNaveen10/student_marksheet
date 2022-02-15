


module.exports = (sequelize,Sequelize)=>{
    
const Student =sequelize. define("student",{
    id : {
      type   :  Sequelize.INTEGER,
      autoIncrement : true,
      primaryKey : true 
    },
    name : {
        type : Sequelize.STRING,
        allownull : false
    },
    age : {
        type : Sequelize.INTEGER,
        allownull : false
    }
})
  return Student;
}
