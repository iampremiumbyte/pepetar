const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const button = document.getElementById("enter");


button.addEventListener("click", e => {
    overlay.style.display = "none";
    video.play();
})
