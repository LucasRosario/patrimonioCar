const express = require("express");
const routes = express.Router();


const EquipController = require('./controllers/EquipController');

routes.get('/equipamentos', EquipController.index);
routes.get('/equipamentos/:id', EquipController.show);
routes.post('/equipamentos', EquipController.store);
routes.put('/equipamentos:id', EquipController.update);
routes.delete('/equipamentos/:id', EquipController.destroy);

module.exports = routes;