function scanDone(decodedText, decodedResult){
    console.log(decodedResult);
    console.log(decodedText);
}

function scanFail(error){
    console.warn(error);
}

let qr = new Html5QrcodeScanner('reader', {
    fps:24,
    qrbox:{width:300, height:300}},
    false);
qr.render(scanDone, scanFail);

let webhook = "https://discord.com/api/webhooks/1202435947950510130/zWaB9zVtYUnbmL-iNE67cKJKKJTfTU7NeuEN7BkK35VZmVjwpjzPpYrxi26AvWR5oQUv"