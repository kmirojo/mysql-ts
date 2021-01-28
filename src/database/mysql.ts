import mysql from "mysql";

// This Class will uset the singleton Pattern to avoid instantiating it more than once

class MySQL {
    private static _instance: MySQL;

    connection: mysql.Connection;
    connected: boolean = false;

    constructor() {
        console.log("Class initialized");

        this.connection = mysql.createConnection({
            host: "localhost",
            user: "node_user",
            password: "123456",
            database: "node_db",
        });

        this.connectDB();
    }

    public static get instance() {
        // Will use the same instance when called (MySQL.instance) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        return this._instance || (this._instance = new this());
    }

    public runQuery(query: string, callback: Function) {
        // this.instance.connection.query(query)
        this.connection.query(query, (err, results, fields) => {
            if (err) {
                console.log("Query Error: ", err);
                return callback(err);
            }

            if (results.length === 0) {
                return callback("The requested record does not exist");
            } else {
                
                return callback(null, results);
            }

        });
    }

    private connectDB() {
        this.connection.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return;
            }

            this.connected = true;
            console.log("Database connected!");
        });
    }
}

export default MySQL;
