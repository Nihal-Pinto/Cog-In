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
        document.getElementById('camera_list').appendChild(temp)
    }
}

addEventListener('camerasObtained', saveCamList)

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
function startCommunication(){
    var payload = {
        oa: token,
        st: sessionStorage['sessionID']
    }
}