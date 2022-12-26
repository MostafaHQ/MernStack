const { response, request } = require("express");
const { model } = require("mongoose");
const { Player } = require("../models/player.model");

module.exports.createPlayer = (request, response) => {
  const { name, position } = request.body;
  Player.create({
    name,
    position,
  })
    .then((player) => response.json(player))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPlayers = (request, response) => {
  Player.find()
    .then((allPlayers) => response.json(allPlayers))
    .catch((err) => response.json(err));
};

module.exports.getPlayer = (request, response) => {
  Player.findOne({ _id: request.params.id })
    .then((player) => response.json(player))
    .catch((err) => response.json(err));
};

module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatePlayer) => response.json(updatePlayer))
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
