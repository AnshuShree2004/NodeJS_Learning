http = require('http');
const port =8082
const host = 'localhost'

const server = http.createServer((req,res) =>{
   if(req.url === "/"){
    res.write("Hello world")
    res.end()
   }
   else if(req.url === "/about"){
    res.write("about page")
    res.end()
   }
   else if(req.url === "/contact"){
    res.write("contact page")
    res.end()
   }
   else {
    res.write("Hello world")
    res.end()
   }
})


server.listen(port,() =>{
    console.log(`Server running at ${host}:${port}`)
})