---
title: "Features - uCodeEditor"
layout: single
sidebar:
  nav: "uce"
permalink: "/uce/features/"
toc: true
---

### Open uCodeEditor

Two ways can archive this:

1. Via __Tools__ -> __uCodeEditor__ -> __uCodeEditor__
2. Open any script files will open uCodeEditor if it's not opened

### Open File In uCodeEditor

Beside double click a script file in Project Window, below action will open file in uCodeEditor too:

1. Via right-click dropdown context menu item `Open in uCodeEditor` in Project Window
2. Double click the script references in Componment inside Inspector
3. Click the `Open...` button in Inspector 

### Color Theme

uCodeEditor supports below theme for now:

- Visual Studio
- Visual Studio Dark

### Minimap

A Minimap (outline view) gives you a high level overview of your source code which is very useful for quick navigation and code understanding.

![minimap.png](/assets/images/uce/minimap.png)

### Indent Guides

The image below shows indentation guides (vertical lines) which help you quickly see matching indent levels.

![ident-guide](/assets/images/uce/ident-guide.png)

### Command Palette

**Command Palette** provides access to many commands. From here, you have acess for most of functionality of __uCodeEditor__. Press `F1` will open Command Palette.

![](/assets/images/uce/commands-.png)

### Go To File

Two way can open the `Go To File` dialog:

1. Press `⌘;` on macOS or `Ctrl+;` on window
2. Press `F1` to open Command Paletee and execute the command `Go To File`

An then select one of the drop down item and will the file directly. 

![](/assets/images/uce/gotofile.png)

### Actions

For the icons button in below image show, from left to right is 

- __Thunder__: Open Command Palette. Shortcut is `F1`
- __Save__: Save current opened document. Shortcut is `⌘K` on macOS and `Ctrl+K` on Windows
- __More__: Hover or click will open drop down menu
  - __New__: Create new document. Shortcut is `⌘J` on macOS and `Ctrl+J` on Windows
  - __Ping__: Ping current opened document in Unity Project Window. Shortcut is `⌘L` on macOS and `Ctrl+L` on Windows
  - __Close Tab__: Close current opened document. Shortcut is `⌘W` on macOS and `Ctrl+W` on Windows
  - __Close All Tab__: Close all tabs in tablist
  - __Save All__: Save all documents which has changes
  - __Settings...__: Open __Settings Window__ Dialog
  - __About__: Show about information and versions.

![](/assets/images/uce/more.png)

### Customization

We can change editor setting in __Settings Window__, which can open via click __More__ button and select __Settings...__ menu in more dropdown menu.

![](/assets/images/uce/settings.png)
