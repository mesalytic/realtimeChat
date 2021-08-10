var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(8074, () => {
    console.log(`listening on port 8074`)
})