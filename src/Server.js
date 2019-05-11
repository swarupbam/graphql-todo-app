const {GraphQLServer} = require("graphql-yoga");
const {addNewTodo, getTodos, getTodoById, updateTodoById, deleteTodoById} = require("./abstraction/DbService");
const resolvers = {
    Query: {
        todos: () => {
            return getTodos();
        },
        todo: (parent, args) => {
            return getTodoById(args.id);
        }
    },
    Mutation: {
        add: (parent, args) => {
            return addNewTodo(args);
        },
        update: (parent, args) => {
            return updateTodoById(args);
        },
        delete: (parent, args) => {
            return deleteTodoById(args.id);
        }
     }
}
const server = new GraphQLServer({
    typeDefs: "./schema/ToDoSchema.graphql",
    resolvers
});
server.start({
    port: 2200
}, () => {
    console.log("Server running on Port 2200");
})