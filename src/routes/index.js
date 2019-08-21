const express = require("express");
const router = express.Router();
const express = require('express');
const router = express.Router();

// Controllers
const homeCtrl = require("../controllers/home.controller");
const imageCtrl = require("../controllers/image.controller");

module.exports = app => {

  router.get('/', homeCtrl.index);
  router.get('/images/:image_id', imageCtrl.index);
  router.post('/images', imageCtrl.create);
  router.post('/images/:image_id/like', imageCtrl.like);
  router.post('/images/:image_id/comment', imageCtrl.comment);
  router.delete('/images/:image_id', imageCtrl.remove);

  app.use(router);

};
