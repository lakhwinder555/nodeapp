var express = require('express');
var app = express(); 
app.get('/', function (req, res) {
  res.send('Welcome to Punjab Everyone!'); 
});
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
}); 
 
   
    
  
