const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('pause');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Play & Pause Video
function toggleVideoStatus() {
   if (video.paused){
      video.play();

   } else{
      video.pause();

   }
}

//update play/pause icon
function updatePlayIcon(){
   if(video.paused){
      play.innerHTML= '<i class="fa fa-play fa-2x"></i>';
   }else{
      play.innerHTML= '<i class="fa fa-pause fa-2x"></i>';
   }
}

//update progress & timestamp
function updateProgress(){
   progress.value = (video.currentTime/video.duration) * 100;
   getCurrentPlaytime();
}

//Set video time to progress
function setVideoProgress(){
   video.currentTime = (+progress.value * video.duration) / 100;

   getCurrentPlaytime();

}

function getCurrentPlaytime(){
      //Get Minutes & Second
   
      let hour = Math.floor(video.currentTime / 360)
      if(hour <10){
         hour='0' + String(hour);
      }
   
      let mins = Math.floor((video.currentTime - (hour*360))/ 60);
      if(mins < 10){
         mins = '0' + String(mins);
      }
   
      let secs = Math.floor((video.currentTime - (hour*360)) % 60);
      if(secs <10){
         secs='0' + String(secs);
      }
   
      timestamp.innerHTML=`${hour}:${mins}:${secs}`
}

//Stop Video
function stopVideo(){
   video.currentTime = 0;
   video.pause();
}

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);
pause.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);

