// my first server making

const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<h1> Hello , this is node js server </h1>')

    }
    res.end()
})
server.listen(5005)
console.log('http server is running on port 5005')