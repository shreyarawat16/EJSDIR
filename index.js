const express= require("express");
const app= express();

const port= 8080;
const path= require("path");
app.use(express.static (path.join(__dirname,"public/css")) );
app.use(express.static (path.join(__dirname,"public/js")) );
app.set("view engine", "engine");


app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res)=>{
    res.render("home.ejs");
});

app.get("/rolldice", (req, res)=>{
    let diceval= Math.floor(Math.random()*6)+1;
res.render("rolldice.ejs", {diceval});
});

app.get("/ig/:username", (req, res)=>{
    const instaData= require("./data.json");
    let {username}= req.params;
    let data= instaData[username];
    if(data){
    res.render("instagram.ejs", { data });
    }
    else{
        res.render("error.ejs");
    }
});
app.listen(port, ()=>{
    console.log("Listening on port", port);
});