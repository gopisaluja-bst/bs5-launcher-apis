const updateInstalledAppsNotification_callbackEvent =
  "updateInstalledAppsNotification";

const installOrPlayApp_event = "installOrPlayApp";
const changeBannerBackgroundImage_event = "changeBannerBackgroundImage";
const getInstalledApps_event = "getInstalledApps";
const openBrowser_event = "openBrowser";
const closeWindow_event = "closeWindow";
const minimizeWindow_event = "minimizeWindow";
const maximizeWindow_event = "maximizeWindow";
const restoreWindow_event = "restoreWindow";
class LauncherApi {
  static openBrowser(url_to_lauch) {
    const data = {
      url: url_to_lauch,
      type: 2,
    };
    webBridge_postApiRequest(openBrowser_event, data);
  }

  static installOrPlayApp(package_name) {
    const data = package_name;
    webBridge_postApiRequest(installOrPlayApp_event, data);
  }

  static changeBannerBackgroundImage(
    image_url,
    video_url,
    video_play_count,
    delay_before_video_in_seconds
  ) {
    const data = {
      url: image_url,
      video: video_url,
      playCount: video_play_count,
      sleep: delay_before_video_in_seconds * 1000,
    };
    webBridge_postApiRequest(changeBannerBackgroundImage_event, data);
  }

  static getInstalledApps() {
    webBridge_postApiRequest(
      getInstalledApps_event,
      {},
      updateInstalledAppsNotification_callbackEvent
    );
  }

  static closeWindow() {
    webBridge_postApiRequest(closeWindow_event);
  }
  static minimizeWindow() {
    webBridge_postApiRequest(minimizeWindow_event);
  }
  static maximizeWindow() {
    webBridge_postApiRequest(maximizeWindow_event);
  }
  static restoreWindow() {
    webBridge_postApiRequest(restoreWindow_event);
  }
}
