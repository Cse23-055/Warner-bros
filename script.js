document.addEventListener('DOMContentLoaded', function () {
    const videos = [
        { src: 'C:\\Users\\Lebo\\Desktop\\vids\\bee (online-video-cutter.com).mp4', title: 'The beekeeper' },
        { src: 'C:\\Users\\Lebo\\Desktop\\vids\\panda (online-video-cutter.com).mp4', title: 'Kung fu panda 4' },
        { src: 'C:\\Users\\Lebo\\Desktop\\vids\\zilla (online-video-cutter.com).mp4', title: 'Godzilla' }
    ];

    const trailerElement = document.getElementById('trailer');
    const videoTitleElement = document.querySelector('.video-title');

    let currentVideoIndex = 0;

    function playVideo(selectedIndex) {
        trailerElement.src = videos[selectedIndex].src;
        videoTitleElement.textContent = videos[selectedIndex].title;
        trailerElement.play();
    }

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        fadeOutVideo(() => {
            playVideo(currentVideoIndex);
            fadeInVideo();
        });
    }

    function fadeOutVideo(completionCallback) {
        trailerElement.style.opacity = 0;
        setTimeout(completionCallback, 500);
    }

    function fadeInVideo() {
        trailerElement.style.opacity = 1;
    }

    // Load the first video
    playVideo(currentVideoIndex);

    // Play the next video when the current one ends
    trailerElement.addEventListener('ended', playNextVideo);

    // Toggle autoplay on click
    trailerElement.addEventListener('click', function () {
        if (trailerElement.paused) {
            trailerElement.play();
        } else {
            trailerElement.pause();
        }
    });

});
