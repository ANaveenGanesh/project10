var http=require('http')
const fs=require('fs')
const path=require('path')
const hostname='127.0.0.1';
const port=3000;
const server=http.createServer(function(request,response)
{
response.writeHead(200,{Content-Type':'text/html})
fs.readFile(path.join(_dirname,'index.html'),'utf-8',(err,data)=>
{
if(err) throw err;
response.end(data);
});
});