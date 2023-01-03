function openBrowser() {
  const url = document.getElementById("urlInput").value;

  const resultLabel = document.getElementById("result");
  resultLabel.innerText =
    resultLabel.innerText + `\nEvent: openBrowser\ndata: ${url}\n`;

  LauncherApi.openBrowser(url);
}

function installOrPlayApp() {
  const pkg = document.getElementById("packageInput").value;

  const resultLabel = document.getElementById("result");
  resultLabel.innerText =
    resultLabel.innerText + `\nEvent: installOrPlayApp\ndata: ${pkg}\n`;
  LauncherApi.installOrPlayApp(pkg);
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
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\nEvent: getInstalledApps\n`;
  LauncherApi.getInstalledApps();
}

function closeWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\nEvent: closeWindow\n`;
  LauncherApi.closeWindow();
}

function minimizeWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\nEvent: minimizeWindow\n`;
  LauncherApi.minimizeWindow();
}

function maximizeWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\nEvent: maximizeWindow\n`;
  LauncherApi.maximizeWindow();
}

function restoreWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\nEvent: restoreWindow\n`;
  LauncherApi.restoreWindow();
}

function clearResult() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = "";
}
