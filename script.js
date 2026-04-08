const images = [
  'assets/images/1.jpg',
  'assets/images/3.jpg',
  'assets/images/5.jpg',
  'assets/images/6.jpg',
  'assets/images/7.jpg',
  'assets/images/8.jpg',
  'assets/images/9.jpg',
  'assets/images/10.jpg',
  'assets/images/11.jpg',
  'assets/images/12.jpg',
  'assets/images/13.jpg',
  'assets/images/14.jpg',
  'assets/images/15.jpg',
  'assets/images/17.jpg',
  'assets/images/19.jpg'
];

let index = 0;
let imageInterval;

const video = document.getElementById('bgVideo');

function startImages() {
  video.style.display = "none";

  imageInterval = setInterval(() => {
    document.body.style.background =
      "black url('" + images[index] + "') no-repeat center center / cover";
    index = (index + 1) % images.length;
  }, 4000);

  // After images run for a while → go back to video
  setTimeout(() => {
    clearInterval(imageInterval);
    startVideo();
  }, 20000); // images run for 20 seconds
}

function startVideo() {
  video.style.display = "block";
  video.currentTime = 0;
  video.play();

  setTimeout(() => {
    startImages();
  }, 10000); // video plays for 10 seconds
}

window.onload = startVideo;
