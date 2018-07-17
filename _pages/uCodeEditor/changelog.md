---
title: "Change Log - uCodeEditor"
layout: single
sidebar:
  nav: "uce"
permalink: "/uce/changelog/"
toc: true
---
### 1.0.7

NEW:
- Add `Export Settings..` and `Import Settings...` action in Command Palette to save or load editor settings to a single file.

Bug Fix:
- Fix bug that window become no response after scene file reloaded.
- Fix xml document comment format for property of csharp.

### 1.0.6

NEW:
- Add TabOut feature which can move cursors out of parenthesizes and string like in Visual Studio. We can enable it in settings window.
- New About Window.
- New theme `Monokai-One`.

Improvements:
- `Open in uCodeEditor` will be grey and unclickable when select unsupported asset.
- Default setting of `Auto Save` is On now.
- uCodeEditor folder in project can be moved to other folders now.

Bug Fix:
- Fix window has little change to become to no response after reimporting.
- Fix open scripts failed on Windows platform in some scenarios.
- Fix go to file feature got an empty list in some scenarios.
- Fix color theme dropdown list scroll bug in Settings Window.

### 1.0.5b

New:
- Add shortcut customization feature. Use `Shortcuts: Customization...` action in Command Palette to open the customization window.
- Add an action `Shortcuts: Restore To Default` action in Command Palette to restore shortcuts to default for all actions
- Add ability that uCodeEditor can remember last active tab

Bug Fix:
- Fix text editor window size does not resize issue.
- Fix bug that no tab will be created when local settings is empty.

### 1.0.4b

New:
- Add search text in files features, open the search view via `Search...` command in Command Palette or via Ctrl+` shortcut
- Add ability that user can add new color theme using json file, see the monokai example in package
- Add `Toggle Word Wrap` command
- Add open project path in Command Line/ Terminal command, see `Project: Open In Command Line` on Windows or `Project: Open In Terminal` macOS in Command Palette

Improvements:
- Improve the `Auto Save` trigger time.
- Improve background color when there are no openned items in uCodeEditor

Bug Fix:
- Fix shortcut doesn't work on Windows for some commands
- Fix some snippets are broken issue
- Fix `Reload uCodeEditor` Command lost in Command Palette issue

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
- Remove .NET 4.6 dependency on Windows


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