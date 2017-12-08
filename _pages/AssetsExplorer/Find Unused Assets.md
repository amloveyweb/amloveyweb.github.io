---
title: "Find Unused Assets"
layout: single
permalink: "/assets-explorer/find-unused-assets"
sidebar:
    nav: "assets-explorer"
---

Select __Tools__ -> __A+ Assets Explorer__ -> __Find Unused Assets__ to trigger a build to find unused assets.

## What assets are Unused?

When the assets satisfy one of below condictions are __Used__, others are __Unused__:

* In __Resources__ folder
* In __StreamingAssets__ folder
* Has __AssetBundle__ assigned
* The Assets are the dependencies of an AssetBundle
* In __Unity Build Report__. Because of this one, we have to trigger a build to get the unused files

## How Assets Explorer show the Used/Unused assets?

* When A+ Assets Explorer does not know whehter assets are used or not, `Unused` column displays ? mark
* If asset is used, it will display black color nd `Used` column display ✔️ mark
* if asset is unused, it will display grey color and `Used` column display &times; mark

NOTE: The `Used` cloumn is renamed to `Unused` cloumn in version 2.0.5

## Important!!

If there are multiple Unity Editor opened, the find unused feature may not works in the Unity Editor instances except the lastest opened one, due to only the lastest opened Unity Editor will write logs to Unity Editor log files, but the previous are not. 

So if there are multiple Unity Editor opened, recommend re-open the Unity Editor of the project you want to find unused assets.

