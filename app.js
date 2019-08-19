var express = require('express');
var bodyparser = require("body-parser");
var bkrouter = require("./routes/bookrouter");
var authrouter = require("./routes/authrouter");

const app =express();
//var app = new express();
const chalk = require('chalk');
const path = require('path');

app.set("view engine","ejs");
app.set("views","./src/views");

app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extended:true}));
app.use("/books",bkrouter);
app.use("/authors",authrouter);
app.get("/",function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
        ptitle:"Library",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}]
    });
});
app.listen(process.env.PORT || 8976,function(req,res){
    console.log("server started at"+chalk.red('8976'));
});