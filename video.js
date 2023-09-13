const AUTOPAUSE_DURATION = 5; // in seconds

export function setupVideo(videoElement, dialogElement) {
	let videoStartTime = 0;
	videoElement.play();

	const onTimeUpdate = () => {
		const seconds = getMediaTimeInSeconds(videoElement);
		// console.log('start time:', videoStartTime, 'seconds:', seconds);
		if (seconds - videoStartTime >= AUTOPAUSE_DURATION) {
			videoElement.pause();
			videoElement.removeEventListener('timeupdate', onTimeUpdate);
			showModal(dialogElement, videoElement);
		}
	};

	videoElement.addEventListener('playing', () => {
		videoStartTime = getMediaTimeInSeconds(videoElement);
		// console.log('videoElement is playing from', videoStartTime);
		videoElement.addEventListener('timeupdate', onTimeUpdate);
	});

	videoElement.addEventListener('pause', () => {
		// console.log('paused: remove timeupdate');
		videoElement.removeEventListener('timeupdate', onTimeUpdate);
	});
}

function getMediaTimeInSeconds(videoElement) {
	const minutes = Math.floor(videoElement.currentTime / 60);
	return Math.floor(videoElement.currentTime - minutes * 60);
}

function showModal(dialogElement, videoElement) {
	dialogElement.show();

	const continueBtn = dialogElement.querySelector('#continueBtn');
	continueBtn.addEventListener('click', (event) => {
		event.preventDefault();
		videoElement.play();
		dialogElement.close();
	});

	const cancelBtn = dialogElement.querySelector('#cancelBtn');
	cancelBtn.addEventListener('click', (event) => {
		event.preventDefault();
		dialogElement.close();
	});
}
