const installorPlayApp = "installorPlayApp";
const changeBannerBackgroundImage = "changeBannerBackgroundImage";
const getInstalledApps = "getInstalledApps";
const updateInstalledAppsNotification = "updateInstalledAppsNotification";
const openBrowser = "openBrowser";

function setupQWebChannel() {
  if (qt != undefined) {
    new QWebChannel(qt.webChannelTransport, function (channel) {
      window.webBridge = channel.objects.webBridge;
      window.webBridge.contentChanged.connect((response) => {
        const { event, data } = response;
        onWebBridgeCallBack(event, data);
      });
      console.log("QWebChannel setup done!");
    });
  }
}

function postQApiRequest(
  event,
  data,
  callbackEvent = null,
  ga = {},
  page = 0x0000
) {
  const requestData = JSON.stringify({ event, data, page, callbackEvent, ga });
  console.log(`webBridge request :${requestData}`);
  window.webBridge?.dataChanged(requestData);
}

function onWebBridgeCallBack(event, data) {
  const resultLabel = document.getElementById("result");
  resultLabel.innerText =
    resultLabel.innerText +
    `\callbackEvent: ${event} \n data: ${JSON.stringify(data, "", "  ")}\n`;
}

function installOrPlayApp_func() {
  data = "com.ludo.king";
  postQApiRequest(installorPlayApp, data);
}

function changeBannerBackgroundImage_func() {
  data = {
    url: "https://cdn-bgp.bluestacks.com/bgp/fullhd/com.plarium.mechlegion.jpg",
    video:
      "https://cdn.now.gg/apps-content/com.innersloth.spacemafia/videos/desktop/among-us.mp4",
    playCount: 5,
    sleep: 10000,
  };
  postQApiRequest(changeBannerBackgroundImage, {});
}

function getInstalledApps_func() {
  data = {};
  postQApiRequest(getInstalledApps, data, updateInstalledAppsNotification);
}

function openBrowser_func() {
  data = {
    url: "https://www.google.com/",
    type: 2,
  };

  postQApiRequest(openBrowser, data);
}

function clear(){
  const resultLabel = document.getElementById("result");
  resultLabel.innerText = ""
}