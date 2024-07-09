import express from 'express';

const app= express();
const port =3000;

const today =new Date();//"July 07, 2024 10:11:00"
const day = today.getDay();

let type = "weekday";
let adv = "it's time to work hard";

if (day === 0 || day === 6){
    type = "the Weekend"
    adv = "it's time to enjoy" 
}
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        dayType: type,
        advice : adv
    });
});



app.listen(3000,()=>{
console.log(`server is running at ${port}`);
})