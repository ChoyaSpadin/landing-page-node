const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let message = "";

// Substituição de function por arrow function
app.get("/", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    res.render("index", {
        titulo: "Blue",
        devList: devList,
        analyticsList: analyticsList,
        message,
    });
});

app.get("/index", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    res.render("index", { titulo: "Blue", devList: devList, analyticsList: analyticsList});
});

app.post("/subscription", (req, res) => {
    const { nome, email } = req.body;
    message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
    res.redirect("/");
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
