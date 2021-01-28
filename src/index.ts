import Server from "./server/server";
import router from "./router/router";
import MySQL from "./database/mysql";

const PORT = 3000;

const server = Server.init(PORT);

server.app.use(router);

server.start(() => {
    console.log(`Server running on port => ${PORT}`);
});
