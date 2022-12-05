function openBrowser() {
  LauncherApi.openBrowser("https://www.google.com/");
}

function installOrPlayApp() {
  LauncherApi.installOrPlayApp("com.ludo.king");
}

function changeBannerBackgroundImage() {
  const image_url =
    "https://cdn-bgp.bluestacks.com/bgp/fullhd/com.plarium.mechlegion.jpg";
  const video_url =
    "https://cdn.now.gg/apps-content/com.innersloth.spacemafia/videos/desktop/among-us.mp4";
  const video_play_count = 2;
  const delay_before_video_in_seconds = 5;

  LauncherApi.changeBannerBackgroundImage(
    image_url,
    video_url,
    video_play_count,
    delay_before_video_in_seconds
  );
}

document.addEventListener(
  updateInstalledAppsNotification_callbackEvent,
  function (event) {
    const resultLabel = document.getElementById("result");
    resultLabel.innerText =
      resultLabel.innerText +
      `\ncallbackEvent: ${updateInstalledAppsNotification_callbackEvent}\ndata: ${JSON.stringify(
        event.detail,
        "",
        ""
      )}\n`;
  }
);

function getInstalledApps() {
  LauncherApi.getInstalledApps();
}
function clearResult() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = "";
}
