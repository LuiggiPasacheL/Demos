const arqN1 = document.getElementById("n1-arq");
const arqN2 = document.getElementById("n2-arq");
const arqN3 = document.getElementById("n3-arq");
const arqProm = document.getElementById("prom-arq");
const arqButton = document.getElementById("arq-button");

const intN1 = document.getElementById("n1-int");
const intN2 = document.getElementById("n2-int");
const intN3 = document.getElementById("n3-int");
const intProm = document.getElementById("prom-int");
const intButton = document.getElementById("int-button");

const metN1 = document.getElementById("n1-met");
const metN2 = document.getElementById("n2-met");
const metN3 = document.getElementById("n3-met");
const metProm = document.getElementById("prom-met");
const metButton = document.getElementById("met-button");

const bdN1 = document.getElementById("n1-bd");
const bdN2 = document.getElementById("n2-bd");
const bdN3 = document.getElementById("n3-bd");
const bdProm = document.getElementById("prom-bd");
const bdButton = document.getElementById("bd-button");

const redN1 = document.getElementById("n1-red");
const redN2 = document.getElementById("n2-red");
const redN3 = document.getElementById("n3-red");
const redProm = document.getElementById("prom-red");
const redButton = document.getElementById("red-button");

const expN1 = document.getElementById("n1-exp");
const expN2 = document.getElementById("n2-exp");
const expN3 = document.getElementById("n3-exp");
const expProm = document.getElementById("prom-exp");
const expButton = document.getElementById("exp-button");

const gesN1 = document.getElementById("n1-ges");
const gesN2 = document.getElementById("n2-ges");
const gesN3 = document.getElementById("n3-ges");
const gesProm = document.getElementById("prom-ges");
const gesButton = document.getElementById("ges-button");

 /*Lógica para calcular los promedios finales*/
arqButton.addEventListener("click", ()=>{
    if(arqN1.value<0 || arqN1.value>20 ||
        arqN2.value<0 || arqN2.value>20 ||
        arqN3.value<0 || arqN3.value>20){
            window.alert("Uno o más valores son erroneos, intentelo nuevamente.")
    }
    else{
        let prom = 0.2*arqN1.value+0.6*arqN2.value+0.2*arqN3.value;
        arqProm.setAttribute("value", Math.round(prom));
        arqButton.disabled = true; //Deshabilita el boton
        arqButton.classList.remove("button-act", "button-hov");
    }
});

intButton.addEventListener("click", ()=>{
    if(intN1.value<0 || intN1.value>20 ||
        intN2.value<0 || intN2.value>20 ||
        intN3.value<0 || intN3.value>20){
            window.alert("Uno o más valores son erroneos, intentelo nuevamente.")
    }
    else{
        let prom = 0.2*intN1.value+0.6*intN2.value+0.2*intN3.value;
        intProm.setAttribute("value", Math.round(prom));
        intButton.disabled = true; //Deshabilita el boton
        intButton.classList.remove("button-act", "button-hov");
    }
 });

 metButton.addEventListener("click", ()=>{
    if(metN1.value<0 || metN1.value>20 ||
        metN2.value<0 || metN2.value>20 ||
        metN3.value<0 || metN3.value>20){
            window.alert("Uno o más valores son erroneos, intentelo nuevamente.")
    }
    else{
        let prom = 0.2*metN1.value+0.6*metN2.value+0.2*metN3.value;
        metProm.setAttribute("value", Math.round(prom));
        metButton.disabled = true; //Deshabilita el boton
        metButton.classList.remove("button-act", "button-hov");
    }
 });

 bdButton.addEventListener("click", ()=>{
    if(bdN1.value<0 || bdN1.value>20 ||
        bdN2.value<0 || bdN2.value>20 ||
        bdN3.value<0 || bdN3.value>20){
            window.alert("Uno o más valores son erroneos, intentelo nuevamente.")
    }
    else{
        let prom = 0.2*bdN1.value+0.6*bdN2.value+0.2*bdN3.value;
        bdProm.setAttribute("value", Math.round(prom));
        bdButton.disabled = true; //Deshabilita el boton
        bdButton.classList.remove("button-act", "button-hov");
    }
 });

 redButton.addEventListener("click", ()=>{
    if(redN1.value<0 || redN1.value>20 ||
        redN2.value<0 || redN2.value>20 ||
        redN3.value<0 || redN3.value>20){
            window.alert("Uno o más valores son erroneos, intentelo nuevamente.")
    }
    else{
        let prom = 0.2*redN1.value+0.6*redN2.value+0.2*redN3.value;
        redProm.setAttribute("value", Math.round(prom));
        redButton.disabled = true; //Deshabilita el boton
        redButton.classList.remove("button-act", "button-hov");
    }
 });

 expButton.addEventListener("click", ()=>{
    if(expN1.value<0 || expN1.value>20 ||
        expN2.value<0 || expN2.value>20 ||
        expN3.value<0 || expN3.value>20){
            window.alert("Uno o más valores son erroneos, intentelo nuevamente.")
    }
    else{
        let prom = 0.2*expN1.value+0.6*expN2.value+0.2*expN3.value;
        expProm.setAttribute("value", Math.round(prom));
        expButton.disabled = true; //Deshabilita el boton
        expButton.classList.remove("button-act", "button-hov");
    }
 });

 gesButton.addEventListener("click", ()=>{
    if(gesN1.value<0 || gesN1.value>20 ||
        gesN2.value<0 || gesN2.value>20 ||
        gesN3.value<0 || gesN3.value>20){
            window.alert("Uno o más valores son erroneos, intentelo nuevamente.")
    }
    else{
        let prom = 0.2*gesN1.value+0.6*gesN2.value+0.2*gesN3.value;
        gesProm.setAttribute("value", Math.round(prom));
        gesButton.disabled = true; //Deshabilita el boton
        gesButton.classList.remove("button-act", "button-hov");
    }
 });
