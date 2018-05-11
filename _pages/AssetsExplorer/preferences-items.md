---
title: "Preferences Items"
layout: single
permalink: "/assets-explorer/preferences-items/"
sidebar:
    nav: "assets-explorer"
toc: true
---

![preferences](/assets/images/preferences.png)

## Color Theme

Currently Assets Explorer supports three themes:

* __Classic:__ White theme.
* __Personal:__ Grey theme, it's for Unity Personal Editor Skin. This is default setting.
* __Pro:__ Black theme, it's for Unity Profressional Editor Skin.

## Creating cache automatically

Whether creating cache automatically. 

* `Checked` for creating cache data automatically every time re-open project. 
* `Uncheck` for read cache data from local disk. If there are no cache data file exists, Assets Explor will create one. The is default setting.

## Using dockable window style

Whether using dockable window style.

* `Checked` for yes, dockable window style
* `Uncheck` for no and will using utility window. Utility windows will always be in front of normal windows, and will be hidden when user switches to another application

## Code File Extensions

Customize the code file extension. Format as `*.[extensions]`. For example, CSharp file is "*.cs". Using `;` to combine multiple code files.

## Prefabs Save Folder

The save folder path for the prefabs created by A+ Prefab Tools. Default is __Assets/Prefabs__