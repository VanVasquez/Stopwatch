let hour = 0,
	minute = 0,
	second = 0;
const milisecond = 1000;
const limit = 60;
let startTime;
document.querySelector('#start').addEventListener('click', () => {
	startTime = setInterval(timer, milisecond);
});
document.querySelector('#stop').addEventListener('click', () => {
	clearInterval(startTime);
});
document.querySelector('#reset').addEventListener('click', () => {
	window.location.reload();
});
function timer() {
	second++;
	if (second > limit) {
		minute++;
		second = 0;
	} else if (minute > limit) {
		hour++;
		minute = 0;
	}
	render();
}

function render() {
	document.querySelector('#hour').innerText = ('0' + hour).slice(-2);
	document.querySelector('#minute').innerText = ('0' + minute).slice(-2);
	document.querySelector('#second').innerText = ('0' + second).slice(-2);
}
