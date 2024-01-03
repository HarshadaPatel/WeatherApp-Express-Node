const express=require("express");

//const port = process.env.PORT || 8000;
const https=require('https');
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/index.html")
    })

app.post('/',(req,res)=>{
    //console.log("post request receveied.")
    //console.log(req.body.cityName)
    const apikeys='77fadd9a496014ba72fad299e9f4a1c2';
    const ctyname=req.body.cityName;
const url='https://api.openweathermap.org/data/2.5/weather?q='+ctyname+'&appid='+apikeys+'&units=Metric'
    https.get(url,(response)=>{
        response.on('data',(data)=>{
         //console.log(data);
         const weatherData=JSON.parse(data);
         //console.log(weatherData);
         const xx=weatherData.weather[0].icon
         const temp=weatherData.main.temp
         //console.log(xx);
         const desc=weatherData.weather[0].description
         //console.log(desc)
         res.write("<h1>the temprature in dehradun is "+temp+"</h1>")
         res.write("<p>descrption is "+desc+"</p>")
        })
   //console.log(response.statusCode)
})
})    
   
//})
app.listen(8000, () => console.log("Server running on port 8000🔥"));