function openBrowser() {
  const url = document.getElementById("urlInput").value;

  const resultLabel = document.getElementById("result");
  resultLabel.innerText =
    resultLabel.innerText + `\n\nEvent: openBrowser\ndata: ${url}\n`;

  LauncherApi.openBrowser(url);
}

function installOrPlayApp() {
  const package_name = document.getElementById("installOrPlayAppPackage").value;
  const app_name = document.getElementById(
    "installOrPlayAppPackage_app_name"
  ).value;
  const icon_url = document.getElementById(
    "installOrPlayAppPackage_icon_url"
  ).value;
  const apk_url = document.getElementById(
    "installOrPlayAppPackage_apk_url"
  ).value;

  const resultLabel = document.getElementById("result");
  resultLabel.innerText =
    resultLabel.innerText +
    `\n\nEvent: installOrPlayApp\ndata: ${JSON.stringify(
      {
        package: package_name,
        app_name,
        icon_url,
        apk_url,
      },
      null,
      2
    )}\n`;
  LauncherApi.installOrPlayApp(
    package_name,
    app_name,
    icon_url,
    apk_url,
  );
}

function uninstallApp() {
  const pkg = document.getElementById("uninstallAppPackage").value;

  const resultLabel = document.getElementById("result");
  resultLabel.innerText =
    resultLabel.innerText + `\n\nEvent: uninstallApp\ndata: ${pkg}\n`;
  LauncherApi.uninstallApp(pkg);
}

document.addEventListener(
  updateInstalledAppsNotification_callbackEvent,
  function (event) {
    const resultLabel = document.getElementById("result");
    resultLabel.innerText =
      resultLabel.innerText +
      `\ncallbackEvent: ${updateInstalledAppsNotification_callbackEvent}\ndata: ${JSON.stringify(
        event.detail,
        null,
        2
      )}\n`;
  }
);

function getInstalledApps() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\n\nEvent: getInstalledApps\n`;
  LauncherApi.getInstalledApps();
}

function closeWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\n\nEvent: closeWindow\n`;
  LauncherApi.closeWindow();
}

function minimizeWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\n\nEvent: minimizeWindow\n`;
  LauncherApi.minimizeWindow();
}

function maximizeWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\n\nEvent: maximizeWindow\n`;
  LauncherApi.maximizeWindow();
}

function restoreWindow() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = resultLabel.innerText + `\n\nEvent: restoreWindow\n`;
  LauncherApi.restoreWindow();
}

function clearResult() {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = "";
}

function hitApi() {
  const apiPath = document.getElementById("momentApiPath").value;
  const payload = document.getElementById("momentApiPayload").value;
  const method = document.getElementById("momentApiMethod").value;
  const contentType = document.getElementById("momentApiContentType").value;

  let options = {
    method: method,
    headers: {
      'Content-Type': contentType
    },
    body: payload
  }
  // Fake api for making post requests
  let fetchRes = fetch(apiPath, options);
  fetchRes.then(res =>
    res.json()).then(d => {
    console.log(d)
  })
}