const http = require('http')
const fs = require('fs')
const path = require('path')



let server = http.createServer((req, res)=>{

  console.log(req.method,"  and  ",req.url)

  if(req.method === "GET"){
    if(req.url === "/"){
      // console.log(__dirname)
      let htmlpath = path.join(__dirname,"public","html","index.html")
      // console.log(htmlpath)
      fs.readFile(htmlpath,"utf-8",(err,data)=>{
        if(err){
          res.writeHead(500, {"content-type" : "text/plain"})
          res.write("server error")
        } else {
          // console.log(data)
          res.writeHead(200, {"content-type" : "text/html"})
          res.write(data)
          res.end()
        }
      })
    }
    else if(req.url.split(".")[1] === "png"){
      let imagePath = path.join(__dirname,"public","html","/Rectangle1.png")
      fs.readFile(imagePath,(err,data)=>{
        if(err){
          res.writeHead(500, {"content-type" : "text/plain"})
          res.write("server error")
        } else {
          res.writeHead(200, {"content-type" : "image/png"})
          res.write(data)
          res.end()
        }
      })
    }
    else if(){}
  }
})


let PORT = 8080
server.listen(PORT,()=>{
  console.log(`Running on this address :   http://localhost:${PORT}/`)
})