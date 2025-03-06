const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));


let customers = [
  {
    id: '1588323375416',
    firstname: 'John',
    lastname: 'Johnson',
    email: 'john@johnson.com',
    phone: '8233243'
  },
  {
    id: '1588323375417',
    firstname: 'Mary',
    lastname: 'Smith',
    email: 'mary@smith.com',
    phone: '6654113'
  },
  {
    id: '1588323375418',
    firstname: 'Peter',
    lastname: 'North',
    email: 'peter@north.com',
    phone: '901176'
  },
];

app.get("/customers", (req, res) => {
  res.render("customerlist", { customers: customers });
});

app.get("/addcustomer", (req, res) => {
    res.render("addcustomer");
  });
  
  app.post("/addcustomer", (req, res) => {
    const newCustomer = {
      id: Date.now().toString(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone
    };
    customers.push(newCustomer);
    res.redirect("/customers");
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});