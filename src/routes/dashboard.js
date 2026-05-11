var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/dashboardCotroller");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserirDadosTP", function (req, res) {
    dashboardController.inserirDadosTP(req, res);
    
})

router.post("/inserirDadosQuiz", function (req, res) {
    dashboardController.inserirDadosQuiz(req, res);
});

module.exports = router;