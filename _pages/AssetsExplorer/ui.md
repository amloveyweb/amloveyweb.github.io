---
title: "Assets Explorer Main UI"
layout: single
permalink: "/assets-explorer/assets-explorer-ui/"
sidebar:
    nav: "assets-explorer"
---

There are three ways to open Asset Explorer

* Select the __Assets Explorer__ menu item from the __Tools__ -> __A+ Assets Explorer__ menu in Unity Editor   
* Press shortcut __Cmd + SHIFT + W__ in macOS (i.e. OSX) or __Ctrl + SHIFT + W__ on Windows
* Right click the Project of Unity Editor, select __A+ Assets Explorer__ in pop up context menu

## Assets Table UI

![ui](/assets/images/ui.png)

### Search

Search input. We can search assets via this control by:

1. Type condictions string into input and press `ENTER` on the keyboard
2. Click the `Search` button to Open Search UI

### Reanme Tool

Open Rename tool. This is toggle button.

### Locate Assets In Unity

Click this button, A+ Assets Explorer will select the selected assets in Unity Project Window

### Refresh Page

Refresh current page. This action will fetch data in A+ Assets Explorer cache 

### Select Unused Assets

Select the Unused assets.

### Delete Assets

Delete selected assets by this button. Delete assets action cannot undo.

Actions Dropdown
---
![actions](/assets/images/actions.png)

### Select All

Select all assets in current page.

### Deselect All

Deselect all assets in current page.

### Select Unused Assets

Select the Unused assets. Same behaviour as the `Select Unused Assets` button.

### Get Assets In Active Scene

Get the assets in current open scene. 

### Refresh Cache Data

Refresh the A+ Assets Explorer Cache data. This is time cost opertion base your project size. 

### Change table Headers

Open the table header settings winwdow. 

![](/assets/images/header-settings.png)

* `Uncheck` the header name will hide header in assets data table
* `Check` the header name will display header in assets data table

If you want to restore the default header settings, just __click the `Restore Default Header Settings` button__.
