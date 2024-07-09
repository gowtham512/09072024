//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Server } from "http";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));

const passwordcheck= (req,res,next)=>{
    if (req.body["password"]==="Gowtham"){
        userIsAuthorised = true;
    }
    next();
}
app.use(passwordcheck);


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
});

app.post("/check",(req,res)=>{
    if (userIsAuthorised){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        // res.sendFile(__dirname+"/public/index.html");
        res.redirect("/");
    }
});
app.listen(3000,()=>{
    console.log(`Server is running at${port}`)
});