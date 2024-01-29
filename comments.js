// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create web server
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create a route
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
});

// Listen on port 8081
app.listen(process.env.PORT || 8081);