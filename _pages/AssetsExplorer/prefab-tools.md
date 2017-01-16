---
title: "Prefab Tool"
layout: single
permalink: "/assets-explorer/prefab-tool"
sidebar:
    nav: "assets-explorer"
---

Prefab Tool is a Utility to create/find prefabs, there are two entries to open the tool:

* Select menu: __GameObject__ -> __A+ Prefab Tools__

![](/assets/images/prefab-tool-2.png)

* Right click on Hierarchy

![](/assets/images/prefab-tool.png)

Below are the description of each menu item.

### Create group menu:

* __New If Needed with Connection:__ Create a new prefab if the selected object is not a prefab instance and then connect the selected object to the new prefab
* __New If Needed Without Connection:__ Create a new prefab if the selected object is not a prefab instance, but does not connect the selected object to the new prefab   
* __New Prefab With Connection:__ Always create a new prefab no matter the selected object is a prefab instance or not, and then connect the selected object to the new prefab(will break the existing one).
* __New Prefab Without Connection:__ Always create a new prefab no matter the selected object is a prefab instance or not, but does not connect the selected object to new prefab

### Find group menu:

* __Find All Prefabs Instances:__ Find all prefab instances in Hierarchy 
* __Find Instances With Connection:__ Find all prefab instances which connected to prefab in Hierarchy
* __Find Disconnected Prefab Instances:__ Find all prefab instances which prefab connection are broken in Hierarchy
* __Find Missing Prefab Instances:__ Find all prefab instances whose prefab are missing. The ones with `(missing)` suffix in Hierarchy
* __Find Model Prefab Instances:__ Find all model prefab instances

### Modification Group:

* __Apply All Selected Prefabs:__ Apply modification of all selected prefabs in Hierarchy
* __Revert All Selected Prefabs:__ Revert all modification of all selected prefabs in Hierarchy
* __Break Prefab Instances:__ Break all connection with prefabs for all selected objects