function openBrowser() {
  webBridge_openBrowser("https://www.google.com/");
}

function installOrPlayApp() {
  webBridge_installOrPlayApp("com.ludo.king");
}

function changeBannerBackgroundImage() {
  const image_url =
    "https://cdn-bgp.bluestacks.com/bgp/fullhd/com.plarium.mechlegion.jpg";
  const video_url =
    "https://cdn.now.gg/apps-content/com.innersloth.spacemafia/videos/desktop/among-us.mp4";
  const video_playCount = 5;
  const time_delay_before_next_loop_in_seconds = 10;

  webBridge_changeBannerBackgroundImage(
    image_url,
    video_url,
    video_playCount,
    time_delay_before_next_loop_in_seconds
  );
}

function getInstalledAppsCallback(data) {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText =
    resultLabel.innerText +
    `\ndata: ${JSON.stringify(data, "", "  ")}\n`;
}
function getInstalledApps() {
  webBridge_getInstalledApps(getInstalledAppsCallback);
}
function clearResult() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = "";
}
