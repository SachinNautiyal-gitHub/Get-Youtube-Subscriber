const express = require("express"); // Import the Express framework
const path = require("path"); // Import the path module for working with file paths

//SCHEMA
const schema = require("./models/subscribers"); // Import the subscriber model
const { error } = require("console"); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('../swagger.js');

const app = express(); // Create an Express application

// app.use('/api-docs',(req, res, next) => {
//   const baseUrl = `${req.protocol}://${req.get('host')}`;
//   swaggerSpecs.host = baseUrl.slice(7, baseUrl.length)
//   app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
//   next();
// });

app.use('/api-docs', swaggerUi.serve, (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const modifiedSpecs = { ...swaggerSpecs, host: baseUrl.slice(7) };
  swaggerUi.setup(modifiedSpecs)(req, res);
});



//HOME PAGE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html")); // Serve the index.html file as the home page
});


//THIS ROUTE SHOWS ALL THE SUBSCRIBERS LIST WITH DETAILS
app.get("/subscribers", async (req, res, next) => {
  try {
    let subscribers = await schema.find(); 
    res.status(200).json(subscribers); 
  } catch (err) {
    res.status(400); 
    next(err); 
  }
});

//THIS ROUTE PROVIDES AN ARRAY OF ALL SUBSCRIBERS WITH ONLY TWO FIELDS, THEIR NAME AND SUBSCRIBED CHANNEL.
app.get("/subscribers/names", async (req, res, next) => {
  try {
    let subscribers = await schema.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    ); 
    res.status(200).json(subscribers); 
  } catch (err) {
    res.status(400); 
    next(err); 
  }
});

// THIS ROUTE PROVIDES THE DETAILS OF SUBSCRIBER WITH THE GIVEN ID.
app.get("/subscribers/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extract the ID parameter from the request URL
    if (!id) {
      res.status(400).json({ message: "No ID provided" }); 
      return;
    }
    const subscriber = await schema.findById(id); 
    if (!subscriber) {
      res.status(404).json({ message: "Subscriber not found" }); 
      return;
    }
    res.send(subscriber); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
});

// // HANDLES ALL THE BAD REQUESTS.
app.use((req, res, next) => {
  if (req.path.startsWith('/api-docs')) {
    return next();
  }
  res.status(404).send({ message: "Error - Route not found" }); 
});

module.exports = app; // Export the Express application
