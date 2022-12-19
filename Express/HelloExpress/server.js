const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumner: faker.phone.number(),
    password: faker.internet.password(),
  };
};
