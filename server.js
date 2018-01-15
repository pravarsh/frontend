'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/creditscore', function(req, res) {
  var request = require('request');
  request('http://129.213.14.185/api/creditscore', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) 
      res.send(body);
    }
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function doFunction(){
    console.log(`Running on http://${HOST}:${PORT}`);
}
