import "reflect-metadata";
import {createConnection} from "typeorm";
import {Photo} from "./photos/entity/Photo";

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "zx1234",
    database: "photo_db",
    entities: [
        Photo
    ],
    synchronize: true,
    logging: false,
}).then(async connection => {}).catch(error => console.log(error));
