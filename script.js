console.log("welcome to spotify");

//Initialize the variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let Masterplay = document.getElementById('Masterplay');
let myprogressbar  = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : "Swag se swagat" , filePath:"songs/1.mp3" , coverpath:"cover1.jpg"},
    {songName : "Aala Re aala" , filePath:"songs/2.mp3" , coverpath:"cover1.jpg"},
    {songName : "Gali Gali" , filePath:"songs/3.mp3" , coverpath:"cover1.jpg"},
    {songName : "Laila" , filePath:"songs/4.mp3" , coverpath:"cover1.jpg"},
    {songName : "Oh Humsafar" , filePath:"songs/5.mp3" , coverpath:"cover1.jpg"},
    {songName : "Bepanah Pyaar" , filePath:"songs/6.mp3" , coverpath:"cover1.jpg"},
    {songName : "Seeti Maar" , filePath:"songs/7.mp3" , coverpath:"cover1.jpg"},
    {songName : "Tu Hi Haqeeqat" , filePath:"songs/8.mp3" , coverpath:"cover1.jpg"},
    {songName : "Baarish" , filePath:"songs/9.mp3" , coverpath:"cover1.jpg"},
    {songName : "Is Tarah Aashiqui Ka" , filePath:"songs/10.mp3" , coverpath:"cover1.jpg"},
    {songName : "Salaam Rocky Bhai" , filePath:"songs/11.mp3" , coverpath:"cover1.jpg"}
]
songItem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
Masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Masterplay.classList.remove('fa-circle-play');
        Masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        Masterplay.classList.remove('fa-circle-pause');
        Masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    // console.log(progress);
    myprogressbar.value = progress;

})
myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})


const MakeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
        
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        MakeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        Masterplay.classList.remove('fa-circle-play');
        Masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=10){
        songIndex=0;
    }
    else{
        songIndex +=1;
        
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    Masterplay.classList.remove('fa-circle-play');
    Masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
        
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    Masterplay.classList.remove('fa-circle-play');
    Masterplay.classList.add('fa-circle-pause');

})