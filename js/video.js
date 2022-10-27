// var video = document.getElementById('player1');

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	video = document.getElementById('player1');

	video.setAttribute('autoplay', false);
	video.setAttribute('loop', false);

	console.log("Auto play is set to " + video.getAttribute('autoplay'));
	console.log("Loop is set to " + video.getAttribute('loop'));

	addEventListeners();
});

function addEventListeners() {
	document.querySelector("#play").addEventListener("click", () => {
		if (video) {
			if (video.paused) {
				video.play();
				updateVolumeInfo();
			}
		}
	});

	document.querySelector("#pause").addEventListener("click", () => {
		if (video) {
			if (!video.paused) {
				video.pause();
			}
		}
	});

	document.querySelector("#slower").addEventListener("click", slowDown);
}

function updateVolumeInfo() {

}

function slowDown() {
	let currVideoSpeed = video.getAttribute('playbackRate');

	console.log(currVideoSpeed);
}