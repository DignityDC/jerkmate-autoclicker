(() => {
    const targetPoster = "/ui-contents/idleposter.jpg";
    const videos = document.querySelectorAll("video");

    for (const video of videos) {
        if (video.getAttribute("poster") === targetPoster) {
            setInterval(() => {
                video.click();
            }, 10);
            break;
        }
    }
})();
