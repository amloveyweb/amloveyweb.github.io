---
title: "Editor Features - uCodeEditor"
layout: single
sidebar:
  nav: "uce"
permalink: "/uce/features/"
toc: true
---

### Open uCodeEditor

Two ways can do this:

* Via menu __Tools__ -> __uCodeEditor__ -> __uCodeEditor__
* Open any script files will open uCodeEditor if it's not opened

#### Multiple Windows

Use `New Window` command or click the `New Window` menu item in more drop down menu in MainUI.

### Open File In uCodeEditor

In addition to double click a script file in Project window, below action will open file in uCodeEditor:

* Via right-click dropdown context menu item `Open in uCodeEditor` in Project window
* Double click the script references in Componment inside Inspector
* Click the `Open...` button in Inspector 
* Use `Go to File...` command to open a file
* Use `Open File...` command to oepn a file

### Command Palette

**Command Palette** provides access to many commands. From here, you have acess for most of functionalities of __uCodeEditor__. Press `F1` will open Command Palette.

![](/assets/images/uce/commands-.png)

### Go To File

Two way can open the `Go To File` dialog:

* Press `⌘;` on macOS or `Ctrl+;` on window
* Press `F1` to open Command Palette and execute the command `Go To File`

An then select one of the drop down item and will the file directly. 

![](/assets/images/uce/gotofile.png)

### Button Actions

As below image show, the buttons from left to right are:

- __Refresh__: Sync with Project, it will save all files and trigger a recompile. Shortcut is `⌘R` on macOS and `Ctrl+R` on Windows
- __Thunder__: Open Command Palette. Shortcut is `F1`
- __Save__: Save current opened document. Shortcut is `⌘K` on macOS and `Ctrl+K` on Windows
- __More__: Click will open drop down menu, and for the menu items:
  - __New File__: Create new document. Shortcut is `⌘T` on macOS and `Ctrl+T` on Windows
  - __New Window__: Create new window.
  - __Ping__: Ping current opened document in Unity Project window. Shortcut is `⌘L` on macOS and `Ctrl+L` on Windows
  - __Close Tab__: Close current opened document. Shortcut is `⌘W` on macOS and `Ctrl+W` on Windows
  - __Close All Tab__: Close all tabs in tablist
  - __Save All__: Save all documents which has changes
  - __Settings...__: Open __Settings Window__ Dialog
  - __About__: Show about information and version

![](/assets/images/uce/more.png)

### Minimap

A Minimap (outline view) gives you a high level overview of your source code which is very useful for quick navigation and code understanding.

![minimap.png](/assets/images/uce/minimap.png)

### Indent Guides

The image below shows indentation guides (vertical lines) which help you quickly see matching indent levels.

![ident-guide](/assets/images/uce/ident-guide.png)

### Folding

Move mouse to the area close to line numbers, Folding outline will show. We can click icon to fold/unfold content of code.

#### Region

uCode also supports region for C# and Shaderlab.

- C#: using `#region` / `#endregion`
- Shaderlab: using `//region` / `//endregion` or `//#region` / `//#endregion`

![](/assets/images/uce/folding.png)

### Markdown Preview

Two ways to preview markdown: 

* Execute `Toggle Markdown Preview` command
* Click the `Eye` icon at the right side of status bar

![](/assets/images/uce/markdown_preview.jpg)

### Tabs Navigation

Currently we can navigate to a tab item by using shortcuts only. The shortcut is `⌘Tab` or `⇧⌘Tab` macOS and `CTRL + F11` or `CTRL + SHIFT + F11` on Windows. The shortcuts are not support customization for now.

![](/assets/images/uce/tabNavigation.jpg)