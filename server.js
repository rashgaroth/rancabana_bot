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
    let bot = "bot"
  
    if(event.message.text.toLowerCase() == "hai"){
      balesan = { type: 'text', text: "Halo juga :), kapan kita kedufan lagi?·" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "Aib nisa".toLowerCase()){
      balesan = { type: 'text', text: "Ratu melet kita semua" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "aib ajis"){
      balesan = { type: 'text', text: "Raja melet kita semua" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "aib kemal"){
      balesan = { type: 'text', text: "wiwiwi kemal .com (2017)\n Pesen berjer skuy(2018)\n Guling Guling dulu skuy (2019)\n celana uniqlo (2020)\n dah cuk, saya telah menyelesaikan sarjana terapan IT S.Tr.com (2021)" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "aib frelly"){
      balesan = { type: 'text', text: "Si dewa_poker\n korek sering jatoh" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "frel"){
      balesan = { type: 'text', text: "apaan anjing" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "nis"){
      balesan = { type: 'text', text: "sisain risol 2 yak" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "mi"){
      balesan = { type: 'text', text: "ohh si cupu poker itu?" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "pal"){
      balesan = { type: 'text', text: "adek lu mana pal? udah ga tahan nih" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "yan"){
      balesan = { type: 'text', text: "ga ke dufan?" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "syah"){
      balesan = { type: 'text', text: "muka elap dulu, banyak lendirnya" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "wi"){
      balesan = { type: 'text', text: "si rere lagi jalan tuh sama mamang somay" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "bil"){
      balesan = { type: 'text', text: "yoo nanas nya yoo tinggal 1 nih ambil sendiri" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "mal"){
      balesan = { type: 'text', text: "manusia tercupu" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "kon"){
      balesan = { type: 'text', text: "tol ayam" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "aib ami"){
      balesan = { type: 'text', text: "Jangan ganggu kami, aku dan rani saling mencintai" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "aib dwiyan"){
      balesan = { type: 'text', text: "Sedang mencari kerang dalam kamar mandi" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "aib nopal"){
      balesan = { type: 'text', text: "adu pala yok sama gua -palqon" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "aib riskon"){
      balesan = { type: 'text', text: "Garuk teroooos\n anjay galer" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "aib bahrijar"){
      balesan = { type: 'text', text: "Diem diem mematikan"};
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "aib hizrian"){
      balesan = { type: 'text', text: "Dufan kuy \n  ayam asix" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "aib bili"){
      balesan = { type: 'text', text: "Mabskuy dulu bro abis itu solat" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "aib syah"){
      balesan = { type: 'text', text: "Muka mmk" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "melet kuy"){
      balesan = { type: 'text', text: "@nisa.\n@Azis" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "anjing"){
      balesan = { type: 'text', text: "Woi santai dong bangsat" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "memek"){
      balesan = { type: 'text', text: "@Kominfo @Feminis_indonesia" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "kontol"){
      balesan = { type: 'text', text: "@naufal" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "ngaceng"){
      balesan = { type: 'text', text: "@kemal" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase().toLowerCase() == "mabok kuy"){
      balesan = { type: 'text', text: "mabok kok ngaceng" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "rani"){
      balesan = { type: 'text', text: "@ami \n maaf mi aku sedang berada di mimpinya dwiyan" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "ajis nisa"){
      balesan = { type: 'text', text: "Melet-melet :p" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "hizrian ucha"){
      balesan = { type: 'text', text: "@dufan_indonesia" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "pasar minggu"){
      balesan = { type: 'text', text: "Guling Guling" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "canda ngaceng"){
      balesan = { type: 'text', text: "Yeuu gua keluarin ni titit gua dengan sempak gua yang abadi" };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "show event"){
      balesan = { type: 'text', text: event.message.toString() };
      return client.replyMessage(event.replyToken, balesan);
    }else if(event.message.text.toLowerCase() == "berak mi?"){
      const bales = {
                  type: 'image',
                  originalContentUrl: "https://cdn.glitch.com/53ae1b8b-acad-4031-99f3-c24f2119b5ab%2F29373.jpg?v=1615214247673",
                  size: "full",
                  aspectRatio: "2:1"
                    
                };
      return client.replyMessage(event.replyToken, bales);
    }
    else{
       return
    }
}
 
// listen on port
const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});