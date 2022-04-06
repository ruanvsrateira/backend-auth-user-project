const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');
const { connect } = require('mongoose');
const session = require("express-session");

app.use(
    session(
        {   
            secret: "faehfffefg9ujrg8ur8gfau8ehf8fhefh8eaf",
            saveUninitialized: false,
            resave: false
        }
    )
);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Conectando com o banco de dados
connect("mongodb+srv://ruanvsrateira:Senac123@cluster0.ragks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log("Servidor conectado com o banco de dados !");
        app.emit("on");
    });

app.on("on", () => {
    app.listen(3333, () => console.log("Servidor rodando ..."));
});

