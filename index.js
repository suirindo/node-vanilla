const http = require("http");

http.createServer(function (req, res) {
    if(req.url === "/") {
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.write("こんにちは");
        res.end();
    } else if(req.url === "/about") {
        res.setHeader("COntent-Type", "text/plain;charset=utf-8");
        res.write("ここはAboutページです。");
        res.end();
    } else if(req.url === "/hobby") {
        res.setHeader("Content-Type", "text/html");
        res.write('<form action = "/outdoor" method = "POST"><input type = "text" name = "sports"> <button type = "submit">Submit</button></form> ');
        res.end();
    } else if(req.url === "/outdoor") {
        console.log("reqの中身:", req);
    }
}).listen(4000, function() {
    console.log("Listening on localhost port 4000");

});