---
title: "Change Log - uCodeEditor"
layout: single
sidebar:
  nav: "uce"
permalink: "/uce/changelog/"
toc: true
---
### 1.1.4

Improvements:
- Add dark mode for markdown preview.
- Move `Tips and Tricks` from modal window to tab page.
- Update About page to include more links.

Bug Fix:
- Fix loading images is not hide issue.

### 1.1.3

Improvements:
- Last opened scene will be on the top of list after execute command `Unity Editor: Go To Scene...`
- Remove refresh assets action before entering play mode to improve performance, but we need to sync scripts before play mode now
- Add depth functions to Shaderlab language

Bug Fix:
- Fix cannot close save message box when click on Don't Save button in some scenarios

### 1.1.2

NEW:
- Add multiple windows supports. We can create new window using `New Window` command or click the `New Window` menu item in more drop down menu.
- Add new light theme named `Github`.
- Add `Open MSDN Documentation for Selection` and `Open Unity Documentation for Selection` commands to search selected text on MSN documentation and Unity script documentation.
- Add syntax highlighting for SQL and Typescript language.
- Add `Save File To..` command which can save a copy of current opened file to the location outside project.

Improvements:
- Update more dropdown menu style with groups.
- Add loading image when uCodeEditor window is launching.
- Add search commands and remove keybinding for a command features in shortcut customization window.

Bug Fix:
- Fix AutoSave are broken in some scenarios.
- Fix `Close` icon is missing in Find References window.
- Fix issue that folding state cannot restore when tab switched.
- Fix Go To Definition will not save view state of preview tab.

### 1.1.1

NEW:
- Add CodeLens for references information.
- Double click on tab list bar will create new file.
- Add `Config Script Templates...` command to support script template modification for current opened Unity Editor.
- About window and Settings window can be opened via commands in Command Palette now.

Improvements:
- Recently opened files will show on the top of `Go To File` list.
- Support open multiple files via `Open In uCodeEditor` menu items in Project.
- Packages size optimization.

Bug Fix:
- Tabs closing will not handle dirty state of file.
- Open file failed when file path contains # symbol.
- Fix duplicated code action items when select multiple code lines.

### 1.1.0

NEW:
- Add Code Action Feature for C#.
- Add tabs navigation.
- Add user snippets support for C# and Shaderlab. Execute `Config User Snippets...` Command in Command Palette for more details.
- Improve Markdown previews by adding syntax highlighting for code and able to remember last opened position after tab switched.

Imporvements:
- Improve menu style and settings window layout.

Bug Fix:
- Fix open file outside project failed sometimes.
- More drop down menu auto hide when mouse don't hover on it.

### 1.0.9

NEW: 
- Add markdown preview feature.
- Add check updates feature in About Window.
- Add `Open file...` action which can open selected file outside project. 

Improvements:
- Shortcuts can be executed when editor are not focused.
- Add more C# code snippets which including MonoBehaviour, EditorWindow and debug log etc.

Bug Fix:
- Fix C# intellisense will not works after scripts are renamed in Unity Editor.
- Fix solution file have little chance cannot be found by Omnisharp when project start.
- Fix go to location from Search Window will be failed when there are no files opened.

### 1.0.8

NEW: 
- Add `Unity Editor: Go To Scene...` action to quick open scene in Unity Editor.
- Add `Unity Editor: Reveal Special Folder...` action to reveal Unity special folder, like Application.dataPath, Application.persistentDataPath, Asset Store Packages Folder etc.
- Add Unity 2018.2 support. We can open file in packages folder as readonly file in uCodeEditor and highlighting for .uxml, .uss, .xsd files.
- Add .csx editing support.
- Add file icons.

Improvement
- Record cursor line to instead of cursor position for cursor navigation history.
- Improve C# Highlighting with async/await keywords support.

Bug Fix:
- Open file with line failed in some scenarios.
- View state of previous opened file will missing after new file is loaded from Unity Editor side.
- Description of quick open file entry is not correct when assets are under root of assets folder.

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