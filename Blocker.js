let lastVideoId = sessionStorage.getItem("yt_lastVideoId") || null;

function getVideoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("v");
}

function isNotYouTube() {
  return !window.location.hostname.includes("youtube.com/watch");
}

function ModifyUrl() {
  if (isNotYouTube()) return;
  let currentID = getVideoId();

  if (!currentID) return;
  let lastVideoId = sessionStorage.getItem("yt_lastVideoId") || null;

  if (currentID === lastVideoId) return;

  lastVideoId = currentID;

  sessionStorage.setItem("yt_lastVideoId", currentID);

  const newUrl = window.location.href.replace(
    "www.youtube.com",
    "www.youtube.com.",
  );

  window.location.replace(newUrl);
}



ModifyUrl();
document.addEventListener("yt-navigate-finish", ModifyUrl);
