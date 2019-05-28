// load app server using express 
// const express = require('express');
// const app = express(); //new instance of express 
const https = require("https");
// const bodyParser = require("body-parser");


https.get('https://data.sfgov.org/resource/jjew-r69b.json', function(response) {
    // console.log(response.statusCode)
    var info = "";
    var names = [];

    response.on("data", function(chunk){
        info += chunk;
    });

    response.on("end", function() {
        if (response.statusCode === 200){
            try{
                //parsing the string in json object
                var data = JSON.parse(info);
                console.log(data);
                for (i = 0; i < data.length; i++ ) {
                    // console.log(data[i].applicant);
                }

            }catch(error){
                console.log("my bad, something went wrong!!!!");
            }
        }else {
            console.log("my bad");
        }
    });
});

