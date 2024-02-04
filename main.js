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

// - > - > - > - > - > - > - > - > - > - > - > Camera Save Func  - > - > - > - > - > - > - > - > - > - > - > -
function saveCamList(event){
    cameras = event.detail;
    console.log(cameras);
    for(var i = 0; i<cameras.length; i++){
        let temp = document.createElement('div');
        temp.className = "camListObject";
        temp.innerText = cameras[i].label;
        temp.setAttribute('onclick', `startScan("${cameras[i].id}")`);
        document.getElementById('camera_list').appendChild(temp);
    }
}

addEventListener('camerasObtained', saveCamList);

// - > - > - > - > - > - > - > - > - > - > - > Ready Function  - > - > - > - > - > - > - > - > - > - > - > - >

function ready(){
    token = window.location.search;
    cameras = Html5Qrcode.getCameras().then(function(devices){
        let camsObtained = new CustomEvent('camerasObtained', {detail: devices});
        dispatchEvent(camsObtained);
    });
}

addEventListener("DOMContentLoaded", ready);

// - > - > - > - > - > - > - > - > - > - > - > Other Stuff - > - > - > - > - > - > - > - > - > - > - > - > - >
const qr = new Html5Qrcode('scanner_box');

let inter;
let idG;

function startScan(id){
    idG=id;
    let dimension = 0;
    let h = document.getElementById('scanner_box').offsetHeight;
    let w = document.getElementById('scanner_box').offsetWidth;
    if(w > h*1.5){
        dimension = w/4;
    } else if(w < h*1.5){
        dimension = h/4;
    } else if(w > h) {
        dimension = w/2;
    } else if(w < h) {
        dimension = h/2;
    } else{
        dimension = h/1.5;
    }
    document.getElementById('camera_list').style.display = 'none';
    let constr = {
        height: h,
        width: w,
    }
    let ar = w/h;
    console.log(ar);
    console.log(dimension);
    qr.start(id, {
        fps: 2,
        qrbox: {width: dimension, height: dimension},
        aspectRatio: ar
    }, scanDone, scanFail).catch((err) => location.reload());
    addEventListener('resize', restartScan);
}

function restartScan(){
    qr.stop().then(() => {startScan(idG)});
}
function startCommunication(){
    var payload = {
        oa: token,
        st: sessionStorage['sessionID']
    }
}