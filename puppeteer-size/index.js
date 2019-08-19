// Importando el modulo
import { sizeRequest } from "./sizeRequest";

// test urls Json
const googleapifont = 'https://fonts.googleapis.com/css?family=YT%20Sans%3A300%2C500%2C700';
const URL_JSON = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=d3fe8101624149bac52d7c2af399be6c&format=json'

// test funtion
sizeRequest(googleapifont).then(function(result) {
   console.log(result)
})
sizeRequest(URL_JSON).then(function(result) {
  console.log(result)
})


// ********************************************************************************************
// Validación de la funcion
/*
console.log("**************************************");
console.log("Getting the response size of a request");
console.log("**************************************");
// Configuración de la API a usar: en este caso estoy usando el API de https://www.last.fm/api/
const config = {
    appName: 'Puppeteer-Size',
    apiKey: 'd3fe8101624149bac52d7c2af399be6c',
    secret: 'e08fe4fd8b0cef76af0a4445dc08a117',
    registeredTo: 'xdeveloper123'
};
// Función conversor de bytes a kB, MB y GB
function formatByteSize(bytes) {
    if(bytes < 1024) return bytes + " Bytes";
    else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KB";
    else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MB";
    else return(bytes / 1073741824).toFixed(3) + " GB";
};

const {apiKey} = config
const URL_XML = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=${apiKey}`
const URL_JSON = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=${apiKey}&format=json`

// test urls Json
const googleapifont = 'https://fonts.googleapis.com/css?family=YT%20Sans%3A300%2C500%2C700'

const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    const response1 = await page.goto(googleapifont);
    console.log(
        response1.headers()['content-length'],                  // Obtienes el tamaño de la transferencia en la red (OJO: a veces puede se comprimida para facilitar el envio)
        formatByteSize((await response1.buffer()).length)       // Obtienes el tamaño del origen
    );

    page.setExtraHTTPHeaders({ 'accept-encoding': 'identity'}); // Se define en el 'Header' un codigo de aceptación 'identity' (sin compresión o modificación)

    const response2 = await page.goto(googleapifont);
    console.log(
        response2.headers()['content-length'],                  // Obtienes el tamaño de la transferencia en la red sin compresión o modificación
        formatByteSize((await response2.buffer()).length)       // Obtienes el tamaño del origen
    );

    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();*/