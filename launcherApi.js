const installOrPlayApp_event = "installOrPlayApp";
const changeBannerBackgroundImage_event = "changeBannerBackgroundImage";
const getInstalledApps_event = "getInstalledApps";
const openBrowser_event = "openBrowser";

const updateInstalledAppsNotification_callbackEvent =
  "updateInstalledAppsNotification";

class LauncherApi {
  static openBrowser(url_to_lauch) {
    data = {
      url: url_to_lauch,
      type: 2,
    };
    webBridge_postApiRequest(openBrowser_event, data);
  }

  static installOrPlayApp(package_name) {
    data = package_name;
    webBridge_postApiRequest(installOrPlayApp_event, data);
  }

  static changeBannerBackgroundImage(
    image_url,
    video_url,
    video_playCount,
    time_delay_before_next_loop_in_seconds
  ) {
    data = {
      url: image_url,
      video: video_url,
      playCount: video_playCount,
      sleep: time_delay_before_next_loop_in_seconds * 1000,
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
}
