const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// create database pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'healthhub',
});

// use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.get('/', (req, res) => {
  res.send('Welcome to HealHub project');
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});