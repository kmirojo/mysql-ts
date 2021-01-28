import express from "express";
import path from "path";

class Server {
    public app: express.Application;
    public PORT: number;

    constructor(PORT: number) {
        this.PORT = PORT;
        this.app = express();
    }

    static init(PORT: number) {
        return new Server(PORT);
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, "../public");

        this.app.use(express.static(publicPath));
    }

    start(callback: Function) {
        this.app.listen(this.PORT, callback());
        this.publicFolder();
    }
}

export default Server;
