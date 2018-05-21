---
title: "Change Log - uCodeEditor"
layout: single
sidebar:
  nav: "uce"
permalink: "/uce/changelog/"
toc: true
---

### 1.0.3b

NEW:
- Add Auto Save support, we can turn on/off it in Settings Window
- Add cursor navigation history support, see the commands `Move Cursor to Previous Positon` and `Move Cursort to Next Position` in Command Palette
- Add settings for tabSize and insertSpaces formatting options for Shaderlab in Settings Window
- Add `Sync With Project` button in Main UI, it can save all document automatically and then trigger a recompile to make project update to date
- Add an new color theme `Monokai`
- Add Region support for CSharp and Shaderlab.
    - C#: using `#region` / `#endregion`
    - Shaderlab: using `//region` / `//endregion` or `//#region` / `//#endregion`
- Add commands for help information, like online documents, tips and tricks

Bug Fix:
- Fix open file will be failed in some cases
- Fix content of opened documents will be overwrote in some cases 
- Fix insert text is not correct after press enter key in xml document comments in C#

### 1.0.2b

Updates:
- Add language highlighting support for xml, c, c++, lua, python, object-c, swift, java, markdown, css and html
- Add Paste menu item in to right-click context menu of uCodeEditor
- Add `Go To File` command to support quick open scripts file
- Add ability to add customize command into Command Palette by customize C# script
- Update highlighting of Shaderlab
- Update Shortcut of some commands to make it more sense and useable

Bug Fix:
- Fix cannot open link in document issue
- Fix document content will not be refresh after the document was changed outside Unity
- Fix open file failed when uCodeEditor window is launching issue

### 1.0.1b

First Release