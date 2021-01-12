var firebase = require('firebase');
var fs = require('file-system');

firebase.initializeApp({
    apiKey: "AIzaSyC4Kk4dhHry9QPmeE65r6b0bNVrwmF4p5Y",
    authDomain: "test-de-personalidad-pru-bbd1a.firebaseapp.com",
    projectId: "test-de-personalidad-pru-bbd1a"
    
});

var db = firebase.firestore();

var args = process.argv.slice(2);

const acciones = [
    { accion: 'preguntas-personalidad', run: inicializarPreguntasPersonalidad },
    { accion: 'preguntas-otro-test', run: inicializarPreguntasOtro },
    {accion: 'programas', run: inicializarProgramas},
    

    { accion: 'all', run: all }
];

run();

function run() {
    const parametro = args[0];
    if (!parametro) {
        console.log('Falta especificar la accion a realizar');
        return;
    }
    const accion = acciones.find(x => x.accion === parametro);
    if (accion) {
        accion.run();
    } else {
        console.log('Accion no encontrada');
    }
    return;
}

function all(){
    acciones.forEach(a => {
        if(a.accion !== 'all'){
            console.log('running ', a.accion );
            a.run();
        }
    });
}


function inicializarPreguntasPersonalidad() {
    let preguntasData = fs.readFileSync('json/preguntasPersonalidad.json');
    let preguntas = JSON.parse(preguntasData);

    preguntas.forEach(preguntas => {
        adicionar("preguntas-personalidad", preguntas);
    });
    return;
}
function inicializarPreguntasOtro() {
    let preguntasData = fs.readFileSync('json/preguntasOtroTest.json');
    let preguntas = JSON.parse(preguntasData);

    preguntas.forEach(preguntas => {
        adicionar("preguntas-otro-test", preguntas);
    });
    return;
}

function inicializarProgramas() {
    let prgramasData = fs.readFileSync('json/programas.json');
    let programas = JSON.parse(prgramasData);

    programas.forEach(programas => {
        adicionar("programas", programas);
    });
    return;
}

function adicionar(coleccion, datos) {
    db.collection(coleccion).add(datos).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
}