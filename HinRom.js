text = document.querySelector('.SecText');
textload = ()=>{
    setTimeout(()=>{
        text.innerText = "Justin Bieber";
    },0);
    setTimeout(()=>{
        text.innerText = "Arijit Singh";
    },6000);
    setTimeout(()=>{
        text.innerText = "Jubin Nautiyal";
    },12000);
    setTimeout(()=>{
        text.innerText = "Dua Lipa";
    },18000);
    setTimeout(()=>{
        text.innerText = "Dilgit Dosanjh";
    },24000);
}
textload();
setInterval(textload,30000);

let audioElement = new Audio('HinRom Songs/1.mp3');
let songIndex = 1;
masterplay = document.getElementById('masterplay');
progressbar = document.getElementById('progressbar');
next = document.getElementById('next');
previous = document.getElementById('previous');

//Handling the play button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        document.getElementById(`${songIndex}_`).style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');
    }
})
//Handling the progressbar
//1)Synching(the timeupdate event is automatically triggered when the time gets updated)
audioElement.addEventListener('timeupdate',()=>{
    progress = [(audioElement.currentTime)/(audioElement.duration)]*100;
    progressbar.value = progress;
})
//2)Change in the progress bar
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = [(progressbar.value)*(audioElement.duration)]/100;
})

//Handling the next button
next.addEventListener('click',()=>{
    if(songIndex>=1 && songIndex<8)
    {
        document.getElementById(`${songIndex}_`).style.opacity = 0;
        songIndex+=1;
    }
    else
    {
        document.getElementById(`${songIndex}_`).style.opacity = 0;
        songIndex = 1;
    }
    audioElement.src = `HinRom Songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    document.getElementById(`${songIndex}_`).style.opacity = 1;
})

//Handling the previous button
previous.addEventListener('click',()=>{
    if(songIndex>=2 && songIndex<=8)
    {
        document.getElementById(`${songIndex}_`).style.opacity = 0;
        songIndex-=1;
    }
    else
    {
        document.getElementById(`${songIndex}_`).style.opacity = 0;
        songIndex = 8;
    }
    audioElement.src = `HinRom Songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    document.getElementById(`${songIndex}_`).style.opacity = 1;
})

//Handling the individual play buttons
Array.from(document.getElementsByClassName('SongItem')).forEach((e)=>{
    e.addEventListener('click',(ele)=>{
        index = parseInt(ele.target.id);
        document.getElementById(`${songIndex}_`).style.opacity = 0;
        songIndex = index;
        document.getElementById(`${songIndex}_`).style.opacity = 1;
        audioElement.src = `HinRom Songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})