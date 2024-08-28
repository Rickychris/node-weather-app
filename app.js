const request = require("postman-request");

const url ="https://api.weatherstack.com/current?access_key=22d238e413abaf76dad54f7ac8d4d1f4&query=New%20York"

request({url:url, json:true}, (error, response) => {
    if(error){
        console.log("unable to connect");
    }else if(response.body.error){
        console.log("unable to find location");
    }else{
        console.log(response.body.current);
    }
})