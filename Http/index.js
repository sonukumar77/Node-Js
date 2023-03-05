const http = require("node:http");

const server = http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET')
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.write("Hello, World!");
        res.end();
        return;

    }
    else
    {
        console.log(req.url);
        res.writeHead(404,{"conetent-type":"text/plain"});
        res.write("Wrong endpoint.");
        res.end();
        return;
    }

});

server.listen(3000,()=>{
    console.log(`server is listening  on http://localhost:3000`);
})
