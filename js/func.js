var gir = document.getElementById("disco")
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var a4 = document.getElementById("a4")

var i=1
var music =["./audio/Undertale.mp3","./audio/LonelyDay.mp3","./audio/DL6Piano.mp3"]
var music1 = new Audio(music[i])

a1.addEventListener("click",()=>{
    gir.className = ""
    music1.pause()
})
a2.addEventListener("click",()=>{
    gir.className = "move"
    music1.play()
    music1.loop = true
})

a3.addEventListener("click",()=>{
    gir.className = "move"
    i++
    if(i>=music.length) i=0
    music1.src = music[i]
    music1.play()
   
})
a4.addEventListener("click",()=>{
    gir.className = "move"
    i--
    if(i<0) i=music.length-1
    music1.src = music[i]
    music1.play()
    
})