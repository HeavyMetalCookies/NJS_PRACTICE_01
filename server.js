

const http = require("http"); //: like "include/import/using"

http.createServer( (server_req,server_res)=>{

    server_res.write( "[Hello World]" );
    server_res.end( );

}).listen( process.env.PORT );