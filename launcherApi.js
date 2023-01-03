const updateInstalledAppsNotification_callbackEvent =
  "updateInstalledAppsNotification";

const installOrPlayApp_event = "installOrPlayApp";
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
