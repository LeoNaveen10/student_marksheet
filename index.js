/**(
 * this connects router and dbconfig
 *  
*/

const express =require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const db= require("./models/db");


db.sequelize.sync({force : true}).then(()=>{
    console.log("tables got recreated");
}).catch(err=>{
    console.log("error in creating tables");
})

require("./route/tableroute")(app);

app.listen(8090,()=>{
    console.log("listening at 8090");
});