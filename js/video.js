var video = document.getElementById('player1');

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	video.autoplay = false;
	video.loop = false;

	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

// document.querySelector("#play").addEventListener("click", function () {
// 	if (video) {
// 		if (video.paused) {
// 			video.play();
// 		}
// 	}
// });


