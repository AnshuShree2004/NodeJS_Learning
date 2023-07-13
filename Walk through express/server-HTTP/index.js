http = require('http');
const port =8082
const host = 'localhost'

const server = http.createServer((req,res) =>{
    // create server 
    res.statusCode = 200; // set to 200 to indicate it is successful
    
   // res.setHeader("Content-type","text/plain")

     res.setHeader("Content-type","JSON.stringify({})")

    res.end("hello world")
})

server.listen(port,() =>{
    console.log(`Server running at ${host}:${port}`)
})