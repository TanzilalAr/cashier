import express  from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";
import ikanRouter from "./routes/ikan.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use("/ikan", ikanRouter)

startSequelize(sequelize);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});