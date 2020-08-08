const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "8998765434",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Renan Afrausino",
    avatar:
      "https://avatars2.githubusercontent.com/u/3664254?s=460&u=73c9a8ab65243b0e10d891ac69043a174f8e2c84&v=4",
    whatsapp: "51997200198",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Fullstack",
    cost: "80",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Maky Brito",
    avatar:
      "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "4899123654",
    bio:
      "An instructor focused on helping people start programming for web - #html #css #javascript #sql #react #nodejs #fullstack",
    subject: "Algoritmo",
    cost: "40",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
];

const subjects = [
  "Artes",
  "Biologo",
  "Ciência",
  "Educação Fisica",
  "Física",
  "Geografia",
  "História",
  "Matématica",
  "Português",
  "Química",
  "Algoritmo",
];

const weekdays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

//Funcionalidades

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}
function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
  const data = req.query;

  //Se tiver dados(data)
  const isNotEmpty = Object.keys(data).length > 0;
  if (isNotEmpty) {
    data.subject = getSubject(data.subject);

    //Adicionar data ao a lista de proffys
    proffys.push(data);

    return res.redirect("/study");
  }

  //Se não, não mostrar a página
  return res.render("give-classes.html", { subjects, weekdays });
}

//Servidor
const express = require("express");
const server = express();

//configura nunjucks (template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//Início e configuração do servidor
server
  //configurar arquivos estáticos (css, scripts, images)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  // start do servidor
  .listen(5500);
