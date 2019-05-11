const {dbClient} = require("../config/index");
function updateTodoById(args){
    return new Promise((resolve, reject) => {
        dbClient.query("update todos set status=? where id=?;", [args.status,args.id], (error, results) => {
            if(error){
                return reject("Failed to delete the todo");
            }
            return resolve("Todo updated successfully");
        });
    });
}
function deleteTodoById(id){
    return new Promise((resolve, reject) => {
        dbClient.query("delete from todos where id=?", [id], (error, results) => {
            if(error){
                return reject("Failed to delete the todo");
            }
            return resolve("Todo successfully inserted");
        });
    });
}
function addNewTodo(args){
    return new Promise((resolve, reject) => {
        dbClient.query("insert into todos(title,description) values(?,?)", [args.title,args.description], (error, results) => {
            if(error){
                return reject("Failed to insert the new todo");
            }
            return resolve("New todo successfully inserted");
        });
    });
}
function getTodoById(id) {
    return new Promise((resolve, reject) => {
        dbClient.query("select * from todos where id=?;", [id], (error, results) => {
            if(error){
                console.log(error);
            }
            return resolve(results[0]);
        });
    });
}
function getTodos() {
    return new Promise((resolve, reject) => {
        dbClient.query("select * from todos;", null, (error, results) => {
            if(error){
                console.log(error);
            }
            return resolve(results);
        });
    });
}
module.exports={
    updateTodoById,deleteTodoById,addNewTodo,getTodoById,getTodos
}