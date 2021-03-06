const line = require('@line/bot-sdk');
const express = require('express');
const axios = require('axios');
 
const config = {
  channelAccessToken: "2y9YSvPPHfhB2GhTXeIhkGHMOW/YshO9mjU0Lxw4FTLdYFdEEgF9PElNqHJi+HSkYz7G8Ih0OnKrsIDoDRdoQ/uOY391yx1sksOSWYMm1X02f47FfHDVmEokQ5qoXWkS/rfxnamDtGG1fY2CEyS0kwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "93563e7f80df98c4520d433f55250c9a",
};
 
// create LINE SDK client
const client = new line.Client(config);
const app = express();
 
// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((e)=>{
      console.log(e);
    });
 
});
 
function handleEvent(event) {
    let echo
  
    if(event.message.text == "hai"){
      echo = { type: 'text', text: "Halo juga :), kapan kita kedufan lagi?·" };
      return client.replyMessage(event.replyToken, echo);
    }else if(event.message.text == "nisa"){
      echo = { type: 'text', text: "Ratu melet kita semua" };
      return client.replyMessage(event.replyToken, echo);
    }else if(event.message.text == "ajis"){
      echo = { type: 'text', text: "Raja melet kita semua" };
      return client.replyMessage(event.replyToken, echo);
    }else if(event.message.text == "kemal"){
      echo = { type: 'text', text: "Jangan main main! saya punya gelar str.com" };
      return client.replyMessage(event.replyToken, echo);
    }else if(event.message.text == "frelly"){
      echo = { type: 'text', text: "Ratu melet kita semua" };
      return client.replyMessage(event.replyToken, echo);
    }
 
    echo = { type: 'text', text: "Gak ngerti bro" };
    return client.replyMessage(event.replyToken, echo);
}
 
// listen on port
const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});