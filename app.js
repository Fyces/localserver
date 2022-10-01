//To Run It You Have to Have Node.JS And Run The Command node app.js
// Link To Your Running Server localhost:port

const http = require('http')
const port = 9000 // You Can Change The Port Here

const server = http.createServer(function(req, res) {
res.write('Hello Friends!') // Message Section!
res.end
})

server.listen(port, function(error) {
    if (error) {
    console.log("Something Went Really Really Wrong!")
    console.log("© Nikolas Roufas 2022-2023")
     } else {
        console.log('Server is listening on port : ' + port)
        console.log("© Nikolas Roufas 2022-2023")
     }
    })
    