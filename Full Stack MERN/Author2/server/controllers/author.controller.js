const { response, request } = require("express");
const { model } = require("mongoose");
const { Author } = require("../models/author.model");

module.exports.createAuthor = (request, response) => {
  const { authorName } = request.body;
  Author.create({
    authorName,
  })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllAuthors = (request, response) => {
  Author.find()
    .then((authors) => response.json(authors))
    .catch((err) => response.json(err));
};

module.exports.getAuthor = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
};

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updateAuthor) => response.json(updateAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
