var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index.html');
})

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

// Create a server
// http.createServer( function (request, response) {  
//    // Parse the request containing file name
//    var pathname = url.parse(request.url).pathname;
   
//    // Print the name of the file for which request is made.
//    console.log("Request for " + pathname + " received.");
   
//    // Read the requested file content from file system
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
//          // HTTP Status: 404 : NOT FOUND
//          // Content Type: text/plain
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       } else {	
//          //Page found	  
//          // HTTP Status: 200 : OK
//          // Content Type: text/plain
//          if (pathname.indexOf(".css") != -1) {
//             response.writeHead(200, {'Content-Type': 'text/css'});
//          } else if (pathname.indexOf(".js") != -1) {
//             response.writeHead(200, {'Content-Type': 'text/javascript'});
//          } else if (pathname.indexOf(".html") != -1) {
//             response.writeHead(200, {'Content-Type': 'text/html'});
//          } else if (pathname.indexOf(".jpg") != -1) {
//             response.writeHead(200, {'Content-Type': 'image/jpeg'});
//          } else if (pathname.indexOf(".png") != -1) {
//             response.writeHead(200, {'Content-Type': 'image/png'});
//          }

//          // response.writeHead(200, {'Content-Type': 'text/html'});
         	
         
//          // Write the content of the file to response body
//          response.write(data.toString());		
//       }
//       // Send the response body 
//       response.end();
//    });   
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');