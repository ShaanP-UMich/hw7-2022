window.addEventListener("load", function () {
	console.log("Good job opening the window");

	// Global var
	video = document.getElementById('player1');

	// video.setAttribute('autoplay', false);
	// video.setAttribute('loop', false);

	video.autoplay = false;
	video.loop = false;

	// console.log("Auto play is set to " + video.getAttribute('autoplay'));
	// console.log("Loop is set to " + video.getAttribute('loop'));

	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

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
	document.querySelector("#faster").addEventListener("click", speedUp);
	document.querySelector("#skip").addEventListener("click", skipAhead);
	document.querySelector("#mute").addEventListener("click", handleMute);
	document.querySelector("#slider").addEventListener("change", handleVolumeSlider);
	document.querySelector("#vintage").addEventListener("click", handleOldSchool);
	document.querySelector("#orig").addEventListener("click", handleOriginal);
}

function updateVolumeInfo() {

}

function slowDown() {
	let currVideoSpeed = video.playbackRate;

	console.log("Slow down video");

	video.playbackRate = currVideoSpeed * 0.9;

	console.log("Speed is " + video.playbackRate);
}

function speedUp() {
	let currVideoSpeed = video.playbackRate;

	console.log("Speed up Video");

	video.playbackRate = currVideoSpeed / 0.9;

	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		video.pause();
	}
	else {
		video.currentTime += 10;
	}

	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
}

function handleMute() {
	if (video.muted) {
		video.muted = false;
		document.getElementById('mute').innerText = "Mute";
	}
	else {
		video.muted = true;
		document.getElementById('mute').innerText = "Unmute";
	}
}

function handleVolumeSlider() {
	let currentVolume = document.getElementById('slider').value / 100;

	video.volume = currentVolume;

	console.log("The current value is " + video.volume);
}

function handleOldSchool() {
	if (!video.classList.contains("oldSchool"))
		video.classList.add("oldSchool");
}

function handleOriginal() {
	if (video.classList.contains("oldSchool"))
		video.classList.remove("oldSchool");
}