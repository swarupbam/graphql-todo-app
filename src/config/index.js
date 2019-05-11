const mysql = require("mysql");
const dbClient = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});
dbClient.connect((error) => {
    if(error){
        console.log(error);
    }
    console.log("Database connection successful.");
});
module.exports = {
    dbClient
}
