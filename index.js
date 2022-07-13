
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const link = document.querySelectorAll('.link');
const logo = document.querySelector('.logo');
let audiosound = document.querySelector('.audiosound');
const mainConteiner = document.querySelector('.main__conteiner');
const photo = document.querySelector('.photo');
const birdPhoto = document.querySelector('.bird-photo');
let isPlay = false;
console.log(photo)


// не играет ли сейчас звук?
function changeisPlat(event) {
  if(event.target.classList.contains('play-btn')) {
    isPlay === false? isPlay = true: isPlay = false;
  }
  if(event.target.classList.contains('link') || event.target.classList.contains('logo')) {
    if(isPlay === false) {
      isPlay = true
    }
    console.log(isPlay)
  }
}

playBtn.addEventListener('click', changeisPlat);

//включение звука 
function playAudio() { 
  if (isPlay === true) {
    audio
    audio.currentTime = 0;
    audio.play();
  }
  if (isPlay === false) {
    audio.pause();
  }
 // console.log(isPlay)
}

//включение значка паузы на кнопке
function toggleBtn(event) {
  if(event.target.classList.contains('play-btn')){
    playBtn.classList.toggle('pause');
  }
  if(event.target.classList.contains('link')||event.target.classList.contains('logo')){
    playBtn.classList.add('pause');
  }
}
playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);


//включение другого аудиофайла после клика по ссылке
function clickEatem(event) {
  if(event.target.classList.contains('link')){
    audiosound.src = `./assets/audio/${event.target.dataset.sound}.mp3`
    mainConteiner.style.backgroundImage= `url(./assets/img/${event.target.dataset.sound}.jpg)`
    birdPhoto.src = `./assets/img/${event.target.dataset.sound}Photo.jpg`
    photo.classList.remove('none')
    photo.classList.add('after')
    
    
  }

  if( event.target.classList.contains('logo')) {
    audiosound.src = `./assets/audio/${event.target.dataset.sound}.mp3`
    mainConteiner.style.backgroundImage= `url(./assets/img/${event.target.dataset.sound}.jpg)`
    photo.classList.add('none');
    photo.classList.remove('after')
  }
  
}
link.forEach((el) => el.addEventListener('click', clickEatem));
link.forEach((el) => el.addEventListener('click', changeisPlat));
link.forEach((el) => el.addEventListener('click', playAudio));
link.forEach((el) => el.addEventListener('click', toggleBtn));
logo.addEventListener('click', clickEatem);
logo.addEventListener('click', changeisPlat);
logo.addEventListener('click', playAudio);
logo.addEventListener('click', toggleBtn);


// добавить класс active

function addActive (event) {
  if(event.target.classList.contains('link')){
    logo.classList.remove('active');
    link.forEach((el) => el.classList.remove('active'));
    event.target.classList.add('active');
  }
  if(event.target.classList.contains('logo')){
    link.forEach((el) => el.classList.remove('active'));
     logo.classList.add('active');
      }
    }
link.forEach((el) => el.addEventListener('click', addActive));
logo.addEventListener('click', addActive);


