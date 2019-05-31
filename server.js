const express = require('express');
const app = express();

app.use(express.static('page'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/page/home.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
