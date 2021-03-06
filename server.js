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
    let balesan
  
    if(event.message.text == "hai"){
      balesan = { type: 'text', text: "Halo juga :), kapan kita kedufan lagi?·" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "nisa"){
      balesan = { type: 'text', text: "Ratu melet kita semua" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "ajis"){
      balesan = { type: 'text', text: "Raja melet kita semua" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "kemal"){
      balesan = { type: 'text', text: "Jangan main main! saya punya gelar str.com" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "frelly"){
      balesan = { type: 'text', text: "Si dewa_poker" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "ami"){
      balesan = { type: 'text', text: "Si cupu_poker" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "dwiyan"){
      balesan = { type: 'text', text: "Sedang mencari kerang dalam kamar mandi" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "nopal"){
      balesan = { type: 'text', text: "Palqon" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "riskon"){
      balesan = { type: 'text', text: "Garuk teroooos" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "bahrijar"){
      balesan = { type: 'text', text: "Diem diem mematikan" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "hizrian"){
      balesan = { type: 'text', text: "Dufan kuy" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "bili"){
      balesan = { type: 'text', text: "Mabskuy dulu bro abis itu solat" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text == "syah"){
      balesan = { type: 'text', text: "Muka mmk" };
      return client.replyMessage(event.replyToken, balesan);
    }
 
    echo = { type: 'text', text: "Gak ngerti bro" };
    return client.replyMessage(event.replyToken, echo);
}
 
// listen on port
const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});