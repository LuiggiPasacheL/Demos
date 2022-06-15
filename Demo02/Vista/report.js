const arqProm = document.getElementById("note-arq");
const intProm = document.getElementById("note-int");
const metProm = document.getElementById("note-met");
const bdProm = document.getElementById("note-bd");
const redProm = document.getElementById("note-red");
const expProm = document.getElementById("note-exp");
const gesProm = document.getElementById("note-ges");

window.addEventListener("load", function() { //Al cargar la pagina, apareceran los datos.
    /*getArq();
    getInt();
    getMet();
    getBD();
    getRed();
    getExp();
    getRes();*/
});

//note es la nota del promedio final
const getArq = (note)=>{
    arqProm.innerHTML = note;
};

const getInt = (arquitectura)=>{
    intProm.innerHTML = note;
};

const getMet = (note)=>{
    metProm.innerHTML = note;
};

const getBD = (note)=>{
    bdProm.innerHTML = note;
};

const getRed = (note)=>{
    redProm.innerHTML = note;
};

const getExp = (note)=>{
    expProm.innerHTML = note;
};

const getGes = (note)=>{
    gesProm.innerHTML = note;
};