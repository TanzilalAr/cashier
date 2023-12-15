import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const ikan = sequelize.define("ikan", {
    id_ikan:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nama_ikan: DataTypes.STRING
},
{
    tableName:"ikan",
    timestamps: false
}
);

export default ikan;