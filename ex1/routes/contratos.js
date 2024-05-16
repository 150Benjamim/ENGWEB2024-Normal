var express = require('express');
var router = express.Router();
var contratos = require('../controllers/contratos');

router.get('/', function(req, res, next) {
  if(req.query.identidade){
      contratos.findContratosEntidade(req.query.identidade)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro));
  }
  else if (req.query.tipo){
      contratos.findContratosTipo(req.query.tipo)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro));
  }
  else{
      contratos.listAll()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro));
  }
});

router.get('/entidades', function(req, res, next) {
  contratos.listEntidades()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.get('/tipos', function(req, res, next) {
  contratos.listarTipos()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.get('/:id', function(req, res, next) {
  contratos.findID(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', function(req, res, next) {
  contratos.addRegisto(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res, next) {
  contratos.deleteRegisto(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});


module.exports = router;
