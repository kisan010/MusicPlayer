let audiorange = document.getElementsByClassName("audiorange"); //audio range controllers
let song = document.getElementsByClassName("song"); //audios
let plays = document.getElementsByClassName("play"); //buttons to play a song
let nextButton = document.getElementsByClassName("next");
let prevButton = document.getElementsByClassName("prev");
let Search=document.getElementById('search')

//metadata=min and max value of song,duration etc..
//Each song play code
for (i = 0; i < plays.length; i++) {
  console.log(i);
  let button = plays[i];
  let audioranges = audiorange[i];
  let songs = song[i];
  let music = song[i + 1];
  let Buttonnext = nextButton[i];
  let button2 = plays[i + 1];
  let buttonPrev=prevButton[i];
  let button3=plays[i-1];
  let prevsong=song[i-1]


  songs.onloadedmetadata = function () {
    audioranges.max = songs.duration;
    audioranges.value = songs.currentTime;
  };
  audioranges.onchange = function () {
    songs.currentTime = audioranges.value;
  };
  console.log(songs.currentTime == songs.duration);

  button.onclick = function () {
    if (button.innerText === "play" && songs.currentTime >= 0) {
      songs.play();
      button.innerText = "pause";
    } else {
      songs.pause();
      button.innerText = "play";
    }
  };

  // Update slider position as audio plays
  songs.addEventListener("timeupdate", () => {
    audioranges.value = songs.currentTime; // Use the precise current time
  });
  songs.addEventListener("ended", function () {
    button.innerText = "play";
    audioranges.value = 0;
  });
  
  //For next Button
  if (i < plays.length) {
    if (i === plays.length - 1) {
      Buttonnext.style.disabled = "true";
    } else {
      Buttonnext.onclick = function () {
        songs.pause();
        button.innerText = "play";
        audiorange.value = 0;
        console.log(audiorange.value);

        music.play();
        button2.innerText = "pause"; // Update the play button for the next song
      };
    }
  }

  //Previous button
  if (i===0) {
 
    buttonPrev.style.disabled = "true";
  } 
  else {
    buttonPrev.onclick = function () {
      songs.pause();
      button.innerText = "play";
      audiorange.value = 0;
      prevsong.play();
      button3.innerText = "pause";
    };
  }

  
}

function filteraudio()
{
var input=document.getElementById('search').value.toLowerCase();
console.log(input);
const Audiolibrary=document.querySelector('.Audiolibrary');
const  songitems= Audiolibrary.querySelectorAll('.songs');
songitems.forEach(item=>{
  const title=item.querySelector('.Info h3').textContent.toLowerCase();
  console.log(title.includes(input));
  if(title.includes(input))
  {
    item.classList.remove('hidden');
    console.log("Showing: ", title);
  }
  else{
    item.classList.add('hidden');
    console.log("Hiding: ", title)
  }

})





}



