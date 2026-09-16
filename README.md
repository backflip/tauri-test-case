# Tauri Test Case

As of macOS 27, [`menuOnLeftClick`](https://v2.tauri.app/learn/system-tray/#add-a-menu) does not seem to work for system tray icons anymore. Instead of triggering the default click action, the menu is opened on left click.

See [commit history](https://github.com/backflip/tauri-test-case/commits) for steps to reproduce:

1. Init project via `create-tauri-app`
2. Add system tray icon toggling the app window: Left click works as intended
3. Add menu to system tray icon: Left click toggles the menu rather than the app window
