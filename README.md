﻿# Almabetter Backend Project

# get-youtube-subscriber
This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.The API has three endpoints that let users get data in JSON format.


## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches. http://localhost:3000/

2. **"/subscribers "** -> This endpoint returns an array of all subscribers in the database. http://localhost:3000/subscribers

3. **"/subscribers/names "** -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:3000/subscribers/names

4. **"/subscribers/:id "** -> This returns the details of subscriber whose Id is provided in endpoint. http://localhost:3000/subscribers/:id


## Application Folder Structure
1. [src/app.js] -> For handling requests and responses.

2. [src/index.js] -> To connect and start the server.

3. [src/createDatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/subscribers.js] -> For the schema.
   
6. [src/index.html] -> The home page for the application.

7. [/swagger.js]  -> contains swagger page data in yml format for api-docs page.
```
├── src/
│   ├── app.js
│   ├── createDatabase.js
│   ├── data.js
│   ├── index.html 
│   ├── index.js
│   └── models/
│       ├── subscribers.js
│ 
├── README.md  
├── {} package-lock.json
└── {}package.json
```

## Installation 

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install** command.

create a file named **.env** to the root folder and create a key value pair inside this file , the key should be **DB_KEY** and the value of the key should be your database connection string. 

Start the server by using  **nodemon src/index.js**  or **npm start**.


