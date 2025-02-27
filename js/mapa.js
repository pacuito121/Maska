var point = document.getElementById('pointer');

//cards
var cerebro= document.getElementById("bra")
var corazon = document.getElementById("hrt")
var pulmones = document.getElementById("plmns")
var musculo = document.getElementById("mscl")
var piel = document.getElementById("piel")
var hormonas = document.getElementById("hrmns")
var intestino = document.getElementById("intes")

//texto
var tapa = document.getElementById("tape")
var info = document.getElementById("carac")
var info2 = document.getElementById("carac2")
var info3 = document.getElementById("carac3")
var info4 = document.getElementById("carac4")
var info5 = document.getElementById("carac5")
var info6 = document.getElementById("carac6")
var info7 = document.getElementById("carac7")
var text = document.getElementsByClassName("text")
var img = document.getElementsByClassName("img")
//functions
document.addEventListener("DOMContentLoaded", ()=>{
    point.style.top="0%"
    point.style.left="0%"
    tapa.style.width="100%"
    info.style.width="0%"
    info2.style.width="0%"
    info3.style.width="0%"
    info4.style.width="0%"
    info5.style.width="0%"
    info6.style.width="0%"
    info7.style.width="0%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
})
cerebro.addEventListener("click",()=>{
    point.style.top="17%"
    point.style.left="46%"
    tapa.style.width="0%"
    info.style.width="100%"
    info2.style.width="0%"
    info3.style.width="0%"
    info4.style.width="0%"
    info5.style.width="0%"
    info6.style.width="0%"
    info7.style.width="0%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
    img[0].style.display="block"
    text[0].style.display="block"
})

corazon.addEventListener("click",()=>{
    point.style.top="28%"
    point.style.left="47%"
    tapa.style.width="0%"
    info.style.width="0%"
    info2.style.width="100%"
    info3.style.width="0%"
    info4.style.width="0%"
    info5.style.width="0%"
    info6.style.width="0%"
    info7.style.width="0%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
    img[1].style.display="block"
    text[1].style.display="block"
})
hormonas.addEventListener("click",()=>{
    point.style.top="19%"
    point.style.left="46%"
    tapa.style.width="0%"
    info.style.width="0%"
    info2.style.width="0%"
    info3.style.width="0%"
    info4.style.width="0%"
    info5.style.width="0%"
    info6.style.width="100%"
    info7.style.width="0%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
    img[5].style.display="block"
    text[5].style.display="block"
})
intestino.addEventListener("click",()=>{
    point.style.top="40%"
    point.style.left="46%"
    tapa.style.width="0%"
    info.style.width="0%"
    info2.style.width="0%"
    info3.style.width="0%"
    info4.style.width="0%"
    info5.style.width="0%"
    info6.style.width="0%"
    info7.style.width="100%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
    img[6].style.display="block"
    text[6].style.display="block"
})
musculo.addEventListener("click",()=>{
    point.style.top="34%"
    point.style.left="57%"
    tapa.style.width="0%"
    info.style.width="0%"
    info2.style.width="0%"
    info3.style.width="0%"
    info4.style.width="100%"
    info5.style.width="0%"
    info6.style.width="0%"
    info7.style.width="0%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
    img[3].style.display="block"
    text[3].style.display="block"
})
piel.addEventListener("click",()=>{
    point.style.top="40%"
    point.style.left="39%"
    tapa.style.width="0%"
    info.style.width="0%"
    info2.style.width="0%"
    info3.style.width="0%"
    info4.style.width="0%"
    info5.style.width="100%"
    info6.style.width="0%"
    info7.style.width="0%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
    img[4].style.display="block"
    text[4].style.display="block"
})
pulmones.addEventListener("click",()=>{
    point.style.top="28%"
    point.style.left="50%"
    tapa.style.width="0%"
    info.style.width="0%"
    info2.style.width="0%"
    info3.style.width="100%"
    info4.style.width="0%"
    info5.style.width="0%"
    info6.style.width="0%"
    info7.style.width="0%"
    for(let i=0; i<text.length; i++) {
        img[i].style.display="none"
        text[i].style.display="none"
    }
    img[2].style.display="block"
    text[2].style.display="block"
})
