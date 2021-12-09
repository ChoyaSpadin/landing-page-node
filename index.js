const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let Pokedex = [
  {
    Numero: "001",
    Nome: "Bulbasaur",
    Tipo: "Grass / Poison",
    Imagem: "/img/Bulbasaur.png",
    Descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger",
    Altura: "0.7m",
    Peso: "6.9kg",
    Categoria: "Seed",
    Habilidade: "Overgrow",
  },
  {
    Numero: "004",
    Nome: "Charmander",
    Tipo: "Fire",
    Imagem: "/img/004.png",
    Descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    Altura: "0.6m",
    Peso: "8.5kg",
    Categoria: "Lizard",
    Habilidade: "Blaze",
  },
  {
    Numero: "007",
    Nome: "Squirtle",
    Tipo: "Water",
    Imagem: "/img/007.png",
    Descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    Altura: "0.5m",
    Peso: "9.0kg",
    Categoria: "Tiny Turtle",
    Habilidade: "Torrent",
  },
];

let mensagem = "";

app.get("/", (req, res) => {
  const pokedex = Pokedex;
  setTimeout(() => {
    mensagem = ``;
  }, 1000);
  res.render("index", { pokedex: pokedex, mensagem });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.get("/detalhes/:id", (req, res) => {
  const indice = req.params.id;
  const pokemon = Pokedex[indice];
  res.render("detalhes", { pokemon: pokemon });
});

app.post("/new", (req, res) => {
  const {
    Numero,
    Nome,
    Tipo,
    Imagem,
    Descricao,
    Altura,
    Peso,
    Categoria,
    Habilidade,
  } = req.body;
  const novoPokemon = {
    Numero: Numero,
    Nome: Nome,
    Tipo: Tipo,
    Imagem: Imagem,
    Descricao: Descricao,
    Altura: Altura,
    Peso: Peso,
    Categoria: Categoria,
    Habilidade: Habilidade,
  };
  Pokedex.push(novoPokemon);
  mensagem = "Pokemon criado com sucesso!";
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
