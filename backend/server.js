const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const authEndpoints = require('./endpoints/auth-endpoint');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const db = require('./repository/database');

app.use('/api', authEndpoints);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});