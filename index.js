var express = require('express')

var app = express()

app.use(express.static('public'))

app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use("/hammer", express.static(__dirname + "/node_modules/hammerjs/"));
app.use("/jquery-hammer", express.static(__dirname + "/node_modules/jquery-hammerjs/"));

var port = process.env.PORT || 3000

app.listen(port,function(){
    console.log("Expressサーバーがポート%dで起動しました。モード:%s",port,app.settings.env)
})