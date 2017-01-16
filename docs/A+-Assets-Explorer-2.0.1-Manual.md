A+ Assets Explorer
---
This documents requires A+ Assets Explorer Version 2.0.1.

__Table Of Content__

[TOC]

### Open A+ Assets Explorer

There are three ways to open Asset Explorer

* Select the __Assets Explorer__ menu item from the __Tools__ -> __A+ Assets Explorer__ menu in Unity Editor   
* Press shortcut __Cmd + SHIFT + W__ in macOS (i.e. OSX) or __Ctrl + SHIFT + W__ on Windows
* Right click the Project of Unity Editor, select __A+ Assets Explorer__ in pop up context menu

## Assets Table UI

![ui](http://www.amlovey.com/assets/images/ui.png)

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
![actions](http://www.amlovey.com/assets/images/actions.png)

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

![](http://www.amlovey.com/assets/images/header-settings.png)

* `Uncheck` the header name will hide header in assets data table
* `Check` the header name will display header in assets data table

If you want to restore the default header settings, just __click the `Restore Default Header Settings` button__.

## Themes

Change theme via the `Color Theme` dropdown in Preferences. There are three color themes supported by A+ Assets Explorer. They are:

* Personal (This is the Default Theme)
* Pro
* Classic

### Presonal

![personal](http://www.amlovey.com/assets/images/personal.png)

### Pro

![pro](http://www.amlovey.com/assets/images/pro.png)

### Classic

![classic](http://www.amlovey.com/assets/images/classic.png)

## Blacklist

Both of assets and folders can be added into blacklist:

* If assets in blacklist, it will hide from assets data table view. 
* If folder in blacklist, all of assets under the folder hide from assets data table view.

### Add Assets / folders into Blacklist

Select the assets/folder in Unity Project Window, and then right click to choose __A+ Assets Blacklist__ -> __Add__

### Remove Assets / folders from Blacklist

Two ways to remove from blacklist:

* Select the assets/folder in Unity Project Window, and then right click to choose __A+ Assets Blacklist__ -> __Remove__
* In Assets Explorer UI, select the Blacklist tab and then click the `Delete` button on the right corner of UI

## Context Menu

![project context menu](http://www.amlovey.com/assets/images/project-context-menu.jpg)

### A+ Assets explorer

Click this menu item to open Assets Explorer Window.

### A+ Assets Blacklist

Add selected assets/folders to or remove selected assets/folders from blacklist cache.

### Select Assets In Selection

Select the assets by type in current seleced objects in Project Window.

### Show In Assets Explorer

Show the selected assets in Assets Explorer. The menu item is disabled when one of below two conditions matched:

1. There is no Assets Explorer Window
2. Multiple type assets are selected. For example, two assets selected, one is a texture and the other is a model

### Find References In Project

Find the references assets of the selected assets, similar to the __Find Preferences In Scene__.

### Find References By type

Find the references assets of selected assets. The type of references assets is the type selected in the context menu. 

## Search Assets

A+ Assets Explorer supports two ways to search your assets: 

1. Type condictions string into input and press `ENTER` on the keyboard
2. Click the `Search` button to Open Search UI

### Search Condition Format

Searching in Assets Explorer supports multiple asset properties. For each property, the search condition format is 

> \[AssetPropertyDataHeader]&nbsp; : &nbsp;\[>\|<] &nbsp;\[SearchValue]  

For the above format:

 - `[AssetPropertyDataHeader]` is the table header in Assets Explorer
 - `:` is Required, it connects data header and its value
 - `[>|<]` is not needed for `string` type property. For `number` type property, if it's not specified, it will default to `>`
 - `[SearchValue]` is the property value we want to search. For `string` type, if you have serveral keywords to search, use `|` to combine them

__NOTE:__ if there are no valid search format, the input string will trust as the search vaule of __Name__ property of assets.

### Samples:

* Below are samples for searching for textures:

> 1. `Name:icon` means searching the textures whose name __contains__ 'icon' chars
> 2. `StorageSize:>1024` means searching the textures whose storage size is larger than 1024 KB
> 3. `MaxSize:<2048` means searching the textures whose import parameter MaxSize is less than 2048

* For multiple conditions, each search condition will always be __`AND`__ logic. Take textures search for example:

> `StorageSize:>1000 KB MaxSize:>1024`  
>    
>  _means:_
>      
>  search the texture with storage size is larger than 1000KB __AND__ import parameter MaxSize is larger than 1024

* The multipe values sample:

> `Name: icon | body` means search the texture whose name __contains__ 'icon' __OR__ 'body'

A video demo also can found in <https://www.youtube.com/watch?v=yNE7V9UoOus>.

## Preferences Items

![preferences](http://www.amlovey.com/assets/images/preferences.png)

## Color Theme

Currently Assets Explorer supports three themes:

* __Classic:__ White theme.
* __Personal:__ Grey theme, it's for Unity Personal Editor Skin. This is default setting.
* __Pro:__ Black theme, it's for Unity Profressional Editor Skin.

### Creating cache automatically

Whether creating cache automatically. 

* `Checked` for creating cache data automatically every time re-open project. 
* `Uncheck` for read cache data from local disk. If there are no cache data file exists, Assets Explor will create one. The is default setting.

### Using dockable window style

Whether using dockable window style.

* `Checked` for yes, dockable window style
* `Uncheck` for no and will using utility window. Utility windows will always be in front of normal windows, and will be hidden when user switches to another application

### Code File Extensions

Customize the code file extension. Format as `*.[extensions]`. For example, CSharp file is "*.cs". Using `;` to combine multiple code files.

### Prefabs Save Folder

The save folder path for the prefabs created by A+ Prefab Tools. Default is __Assets/Prefabs__

## Find Unused Assets

Select __Tools__ -> __A+ Assets Explorer__ -> __Find Unused Assets__ to trigger a build to find unused assets.

### What assets are Unused?

When the assets satisfy one of below condictions are __Used__, others are __Unused__:

* In __Resources__ folder
* In __StreamingAssets__ folder
* Has __AssetBundle__ assigned
* In __Unity Build Report__. Because of this one, we have to trigger a build to get the unused files.

### How Assets Explorer show the Used/Unused assets?

* When A+ Assets Explorer does not know whehter assets are used or not, `Unused` column displays ? mark
* If asset is used, it will display black color nd `Unused` column display ✔️ mark
* if asset is unused, it will display grey color and `Unused` column display &times; mark

## Data Exporter

![data-exporter](http://www.amlovey.com/assets/images/data-exporter.png)

Export assets data to a local file. Select menu __Tools__ -> __A+ Assets Explorer__ -> __Data Exporter__, currently only CSV is supported. 

### Export to CSV

Select  __Tools__ -> __A+ Assets Explorer__ -> __Data Exporter__ -> __Export as CSV...__ to save all data to local csv files.

## Build Manager

![build-manager](http://www.amlovey.com/assets/images/build-manager.png)

### Open Scene Explorer

Click the menu item __Tools__ -> __A+ Assets Explorer__ -> __Build Manager__

### Scene overview 

Scene List view and the active scene of Unity Editor will be red color.

### Multi Selection

Press `SHIFT` or `CMD/CTRL` key to multi Selection.

### Scene data reordering 

Drag items and reordering the scene in list and build settings.

### Save/Load Build Settings 

Save/Load build settings to/from local files. Click the right corner and select __Save Build Setting As...__ / __Load Build Setting From ...__
to save/load build settings to/from local files.

### Ping Scene files in Project Window   

Find scene files in Project Window by right click the scene file and select __Pint in Project__.

### Delete Scenes

Delete Scene from Project by right click the scene file and select __Pint in Project__. This operation supports multi selection.

### Active/Deactive in Build Settings

Set the scene should be in Building Settings or not by right click the scene file and select __Pint in Project__.
This operation supports multi selection.

## Prefab Tool

Prefab Tool is a Utility to create/find prefabs, there are two entries to open the tool:

* Select menu: __GameObject__ -> __A+ Prefab Tools__

![](http://www.amlovey.com/assets/images/prefab-tool-2.png)

* Right click on Hierarchy

![](http://www.amlovey.com/assets/images/prefab-tool.png)

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

## Quick Folder Opener

Select Menu __Tools__ -> __A+ Assets Explorer__ -> __Quick Folder Opener__ and select folder you want to open.

![quick folder opener](http://www.amlovey.com/assets/images/quick-folder-opener.png)

### Supported Folders:

The Quick Folder Opener can following path in both of Windows and macOS.

* Application.dataPath
* Application.persistentDataPath
* Application.streamingAssetsPath
* Application.temporaryCachePath
* Asset Store Packages Folder
* Editor Application Path

## Table Headers

Below headers are supported by A+ Assets Explorer currently. If you need more, welcome to send [email](mailto:amlovey@qq.com) to me.

### Textures

Headers | data type | Comments 
--- | --- | --- 
Name | string | File name of texture file 
FileSize | number | The file size of texture file
StorageSize | number | Storage size of texture file
RuntimeSize | number | Runtime size of texture file
MaxSize | number | Max size of texture
TextureFormat | string | Texture format
R&W | boolean | ReadWrite enable or not
MM | boolean | MipMap enabled or not
Type | string | Texture type
WidthInPixel | number | Width of texture in pixel
HeighInPixel | number | Height of texture in pixel
Width | number | Width of texture
Height | number | Height of texture
File Path | string | The file path of the texture file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets


### Models

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of texture file 
FileSize | number | The file size of model file
VertexCount | number | Vertex count of model
Tris | number | Tris count of model
ScaleFactor | number | Scale factor of model
MeshCompress | boolean | Compress mesh or not
OptimizeMesh | boolean |  Optimize mesh
R/W Enable | boolean | Is readable or not
ImportBlendShapes | boolean | Should Unity import BlendShapes
GenerateColliders | boolean | Should Unity generate mesh colliders for all meshes
LightmapToUV2 | boolean | Generate lightmap UVs to UV2
SwapUVs | boolean | Swaps the 2 UV channels in meshes. Use if your diffuse texture use UVs from lightmap 
File Path | string | The file path of the model file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Animations

Headers | data type | Comments
--- | --- | ---
Name | string | Name of animation
In File | string | In which file
Length | number | Frame Length 
FPS | number | Frame per second
LoopTime | boolean | Loop animation or not
LoopPose | boolean | Loop pose or not
CycleOffset | number | Cycle Offset
Path | string | The file path of animation file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Audios

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of audio file 
ImportedSize | number | The size after imported
FileSize | number | The file size of audio file
Ratio | number | Compress ratio
Frequency | number | Audio frequency
Compress Format | string | Compress format of audio
Duration | number | Duration of the audio
Quality | number | Quality of the audio 
Background | boolean | Run in background
File path | string | The file path of the audio file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Movies

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of movie file 
Approx | number | Approx size of the movie
Texture Size | number | Texture size of the movie
Quality | number | Quality of the movie
Duration | number | The duration of the movie
File Path | string | The file path of movies file
Unused | boolean |Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Fonts

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of font file 
FontNames | string | Font names
FileSize | number | File size of font file
RenderingMode | string |Rendering mode
Character | string | Character type
File Path | string | The file path of font file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Materials

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of material file 
FileSize | number | File size of material file
Type | string | The type of material: Material or Physics Material
Shader | string | The shader name that material used
File Path | string | The file path of material file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Shaders

Headers | data type | Comments 
--- | --- | --- 
Name | string | Shader name
FileName | string | Name of shader file
FileSize | number | Size of shader file
RenderQueueText | string | Render Queue in text
RenderQueue | number | Render Queue in number
LOD | number | Level of Detail
VariantsIncluded | number | Shader variants only in scene
VariantsTotal | number | All shader variants
SurfaceShader | boolean | has surface shader or not
CastShadows | boolean | Cast shadows or not
IgnoreProjector | boolean | Ignore projector or not
DisableBatching | string | Batch is disabled or not
File Path | string | The file path of shader file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### StreamingAssets

Headers | data type | Comments
--- | --- | ---
Name | string | File name
FileSize | number | Size of file
File Path | string | The file path of file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Code files

Headers | data type | Comments
--- | --- | --- 
Name | string | File name
FileSize | number | Size of file
FileType | string | File type of asset file
File Path | string | The file path of file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

### Others

Headers | data type | Comments
--- | --- | --- 
Name | string | File name
FileSize | number | Size of file
FileType | string | File type of asset file
File Path | string | The file path of file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Purchase

<iframe src='https://api.assetstore.unity3d.com/affiliate/embed/package/57335/widget-light?aid=1011lGoJ' style='width:202px; height:260px; border:0px;'></iframe>

## Release Note

### __2.0.1__

1. Add tips information in About tab 
2. Add a new category named `OTHERS` which include assets unsupported in prior to this version 
3. Fix the name of Unity Native format assets are not changed in Inspeactor after rename, for example, Materials 
4. Fix wrong sort order when in rename assets mode 
5. Fix cannot find physisMaterial2D bug 
6. Fix Blacklist not work on some assets on Windows

### __2.0.0__

1. Add quick selection: Select all assets , deselect all assets and select unused assets 
2. Able to refresh cache in Asset Explorer 
3. Able to get assets in active scene 
4. Able to rename animation clip in fbx 
5. Move header setting to 'Actions' dropdow menu 
6. Fix some bugs 


### __v1.1.9__

1. Supports Unity 5.5 
2. Add prefab tool which support bulk operations, like creating, apply and revert etc. 
3. Add rename tool which allows rename assets at one click 
4. Rename "Scene Explorer" To "Build Manager" 
5. Update UI to make it more sense 
6. Fix some bugs

### __v1.1.8__

1. Able to export data to CSV file now 
2. Some bug fixes

### __v1.1.7__

1. Add blacklist feature 
2. Add asset icon 
3. Add find references in Project or by type feateure 
4. Change default settings for windows style 
5. Update folder structure. Please delete and then reimport new A+ Assets Explorer assets. 
6. Reduce packages size 7. Improve profermance for syncing data after bulk edit assets. 
7. Some bugs fixes

### __v1.1.6__

1. improve asset search feature. We can search multiple properties now. 
2. Update modal UI 
3. Reduce packages size 
4. fix some small bugs