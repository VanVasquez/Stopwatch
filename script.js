let sec = 0,
  min = 0,
  hour = 0;
const ms = 1000;
const limit = 60;

document.querySelector('#start').addEventListener('click', () => {
  startTime = setInterval(start, ms / 1000);
});
document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(startTime);
});
document.querySelector('#reset').addEventListener('click', () => {
  window.location.reload();
});
function start() {
  sec++;
  if (sec >= limit) {
    sec = 0;
    min++;
  } else if (min >= limit) {
    min = 0;
    hour++;
  }
  update();
}
function update() {
  document.querySelector('#second').innerText = ('0' + sec).slice(-2);
  document.querySelector('#minute').innerText = ('0' + min).slice(-2);
  document.querySelector('#hour').innerText = ('0' + hour).slice(-2);
}
