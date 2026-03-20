// on form submit
function loadSite() {
  let url = document.getElementById("urlInput").value.trim();
  if (!url) return;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  document.getElementById("proxyFrame").src = url;
  // hide input or show loading if any
}

// similar for YouTube button
function loadYouTube() {
  let id = document.getElementById("ytInput").value.trim();
  if (id) {
    document.getElementById("proxyFrame").src = "https://www.youtube.com/embed/" + id;
  }
}
