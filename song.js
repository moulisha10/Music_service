console.log("Welcome to console");

let songIndex = 0;
let audioElement = new Audio('images/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filepath: "images/1.mp3", coverPath: "images/1.jpg"},
    {songName: "Cielo - Huma-Huma", filepath: "images/2.mp3", coverPath:'images/2.jpg'},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filepath: "images/3.mp3", coverPath: "images/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filepath: "images/4.mp3", coverPath: "images/5.jpg"},
    {songName: "Janji-Heros-Tonight-feat-Johnning-NCS-Release", filepath: "images/5.mp3", coverPath: "images/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filepath: "images/6.mp3", coverPath: "images/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filepath: "images/7.mp3", coverPath: "images/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filepath: "images/8.mp3", coverPath: "images/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filepath: "images/9.mp3", coverPath: "images/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filepath: "images/10.mp3", coverPath: "images/10.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click',()=>{ 
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `images/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9) {
        songIndex = 0
    }
    else {
        songIndex +=1;
    }
    audioElement.src = `images/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0) {
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `images/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})