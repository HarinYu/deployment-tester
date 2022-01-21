const audioContainer = document.getElementById('audioContainer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const audioNextBtn = document.getElementById('audioNextBtn');

const MUSIC_COUNT = 2;

let currentAudio = 1;

function playAudio() {
  audioContainer.volume = 0.5;
  audioContainer.autoplay = true;
  audioContainer.loop = true;
  audioContainer.play();
}

function stopAudio() {
  audioContainer.pause();
}

function loadAudio() {
  const source = document.getElementById('audioSource');
  source.src = `../audio/${currentAudio}.mp3`;
  audioContainer.load();
  playAudio();
}

function handleNextButtonClick() {
  if (currentAudio < MUSIC_COUNT) {
    currentAudio += 1;
  } else {
    currentAudio = 1;
  }
  audioContainer.pause();
  loadAudio();
}

playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click', stopAudio);
audioNextBtn.addEventListener('click', handleNextButtonClick);
