var fs = require("fs")
var express = require('express')
var app = express()
var http = require('http')
var https = require('https')
var request = require('request')
var multer = require('multer')
var html = (fs.readFileSync('main.html').toString())
var upload = multer({dest: 'uploadStuff'})
app.set('port', (process.env.PORT || 5000));

  app.get('/',function (req, res) {
     res.send(html)
})
  
  app.post("/api/getFile", upload.single("uFile"), function(req, res) {
    
    res.send('{"size": '+'"'+req.file['size']+'"'+'}')
    
 });


     //comment out to run local
    app.listen(process.env.PORT, '0.0.0.0', function(err) {
  console.log("Started listening on %s", app.url);
});
  
  /*uncomment out for running on localhost
    app.listen(5000, function(err) {
  console.log("Started listening on port 5000...");
});*/
    
    