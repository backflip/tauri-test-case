import { Menu } from "@tauri-apps/api/menu/menu";
import { exit } from "@tauri-apps/plugin-process";
import { TrayIcon, type TrayIconEvent } from "@tauri-apps/api/tray";
import { getCurrentWindow } from "@tauri-apps/api/window";

const window = getCurrentWindow();

document.addEventListener("DOMContentLoaded", async () => {
  await TrayIcon.new({
    action: async (event: TrayIconEvent) => {
      switch (event.type) {
        case "Click": {
          if (event.buttonState === "Down") {
            break;
          }

          if (await window.isVisible()) {
            await window.hide();
          } else {
            await window.show();
            await window.setFocus();
          }

          break;
        }
      }
    },
    title: `Toggle`,
  });
});
