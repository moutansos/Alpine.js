const alpine = require('./main.js');
const http = require('http');

const PORT = 8080;

function getData() {
    var data = {
        'title': 'Testing 123',
        'msg': 'This is a message'
    }
    return data;
}

var server = http.createServer(function(req, res){
    alpine.render('./examples/example1.alp', getData(), function(html){
        res.end(html.toString());
    });
});

server.listen(PORT, function(){
    console.log("Server is now listening on: http://localhost:" + PORT);
})

//TODO: Implement real unit tests