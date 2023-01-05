const bodyParser = require("body-parser");
const express = require("express");
const {PORT, DB_SYNC} = require("./config/serverConfig")
const db = require("./models/index");
const ApiRoutes = require("./routes/index");

const settingup = async()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/api", ApiRoutes);

    app.listen(PORT , ()=>{
        if(DB_SYNC){
            db.sequelize.sync({alter:true});
        }
        console.log("Server Started on" , PORT);
    })
}

settingup();