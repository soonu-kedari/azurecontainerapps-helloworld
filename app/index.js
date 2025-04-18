const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));

function myFunction() {
  var x = document.lastModified;
  document.getElementById("TestText").innerHTML = new Date(document.lastModified).toISOString().substr(11, 8);
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});

