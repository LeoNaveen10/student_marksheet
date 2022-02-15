

const tableControl = require("../controller/tablecontroller");

module.exports=(app)=>{
    
    app.post("/marksheetserver/v1/students/",tableControl.createNewStudent);
    app.post("/marksheetserver/v1/marksheets/",tableControl.creatNewMarksheet);
    app.get("/marksheetserver/v1/students/",tableControl.findAllStudent);
}