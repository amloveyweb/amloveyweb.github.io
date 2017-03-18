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
* In __Unity Build Report__. Because of this one, we have to trigger a build to get the unused files.

## How Assets Explorer show the Used/Unused assets?

* When A+ Assets Explorer does not know whehter assets are used or not, `Unused` column displays ? mark
* If asset is unused, it will display grey color nd `Unused` column display ✔️ mark
* if asset is used, it will display black color and `Unused` column display &times; mark
