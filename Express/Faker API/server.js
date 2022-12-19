const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  return {
    _id: faker.datatype.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };
};

const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    companyName: faker.name.companyName(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.adress.state(),
      zipCode: faker.adress.zipCode(),
      country: faker.adress.country(),
    },
  };
};

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  res.json({
    user: createUser(),
    company: createCompany(),
  });
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
