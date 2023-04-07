function showTruth(data) {
  const vid = document.getElementById("vid");
  const video = document.getElementById("video");
  vid.style.display = "block";
  // SOMETHING IS HERE -> edf2192208 <- HERE IS SOMETHING
  if (!data) {
    video.style.display = "flex";
    video.src = ["solution.mp4", "solution2.mp4"][Math.round(Math.random())];
    video.play();
  }
}