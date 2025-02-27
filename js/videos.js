var links = [
    "./mp3/bacha.mp4",
    "./mp3/Compa.mp4",
    "./mp3/mami.mp4",
    "./mp3/Nm1.mp4",
    "./mp3/nm2.mp4",
    "./mp3/run.mp4",
    "./mp3/sinc.mp4",
    "./mp3/Transformers.mp4"
]
var i=0
var back = document.getElementById("bef")
var next = document.getElementById("next")
var video = document.getElementById("video")
video.src = links[i]
next.addEventListener("click",()=>{
    i++
    if(i>=links.length) i=0
    video.src = links[i]
    video.play()
})
back.addEventListener("click",()=>{
    i--
    if(i<0) i=links.length-1
    video.src = links[i]

})