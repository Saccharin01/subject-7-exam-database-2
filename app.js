const http = require('http')
const fs = require('fs')
const path = require('path')



let server = http.createServer((req, res)=>{
  console.log(req.method,"  and  ",req.url)
  if(req.method === "GET" && req.url === "/"){
    console.log(__dirname)
    let pass = path.join(__dirname,"public","html")
    console.log(pass)
    // let filedata = fs.readFile()
  }
})


let PORT = 8080
server.listen(PORT,()=>{
  console.log(`Running on this address :   http://localhost:${PORT}/`)
})