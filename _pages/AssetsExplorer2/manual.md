---
title: "A+ Assets Explorer 2"
layout: single
sidebar:
  nav: "assetsexplorer2"
permalink: "/assetexplorer2/manual/"
---

### Open Assets Explorer

Select the __Assets Explorer__ menu item from the __Tools__ -> __A+ Assets Explorer 2__ menu in Unity Editor   

## Assets Table UI

![2](/assets/images/ae2/2.png)

### Search Assets

Search input. We can search assets via this control by typing condictions string into input and then press `ENTER` on the keyboard. It deault to seach asset name if there no seach field specific.

#### Search Condition Format

Searching in Assets Explorer supports multiple asset properties. For each property, the search condition format is 

> \[AssetPropertyDataHeader]&nbsp; : &nbsp;\[>\|<] &nbsp;\[SearchValue]  

For the above format:

 - `[AssetPropertyDataHeader]` is the table header in Assets Explorer
 - `:` is Required, it connects data header and its value
 - `[>|<]` is not needed for `string` type property. For `number` type property, if it's not specified, it will default to `>`
 - `[SearchValue]` is the property value we want to search. For `string` type, if you have serveral keywords to search, use `|` to combine them

__NOTE:__ if there are no valid search format, the input string will trust as the search vaule of __Name__ property of assets.

#### Samples:

* Below are samples for searching for textures:

> 1. `Name:icon` means searching the textures whose name __contains__ 'icon' chars
> 2. `StorageSize:>1024` means searching the textures whose storage size is larger than 1024 KB
> 3. `MaxSize:<2048` means searching the textures whose import parameter MaxSize is less than 2048

* For multiple conditions, each search condition will always be __`AND`__ logic. Take textures search for example:

> `StorageSize:>1000 KB MaxSize:>1024`  
>
> _means:_
>
> search the texture with storage size is larger than 1000KB __AND__ import parameter MaxSize is larger than 1024

* The multipe values sample:

> `Name: icon | body` means search the texture whose name __contains__ 'icon' __OR__ 'body'

### Copy Actions Dropdown

![截屏2020-05-04 19.48.54](/assets/images/ae2/3.png)

Copy the name or path of selcted assets in table.

### Change table Headers

Open the table header settings winwdow. 

### Locate Assets In Project window

Click this button, A+ Assets Explorer will select the selected assets in Unity Project Window

### Delete Assets

Delete selected assets by this button. Delete assets action cannot undo.


## Themes

Supports Unity Person or Professional theme.

## Settings

![截屏2020-05-04 19.54.26](/assets/images/ae2/0.png)

### General

#### Code File Extensions

The extension of files that assets explorer consider it whether its code file or not.

### Blacklist

Both of assets and folders can be added into blacklist:

* If assets in blacklist, it will hide from assets data table view. 
* If folder in blacklist, all of assets under the folder hide from assets data table view.

#### Add Assets / folders into Blacklist

Select the assets/folder in Unity Project Window, and then right click to choose __Assets Explorer Blacklist__ -> __Add__

#### Remove Assets / folders from Blacklist

Two ways to remove from blacklist:

* Select the assets/folder in Unity Project Window, and then right click to choose __Assets Explorer Blacklist__ -> __Remove__
* In Assets Explorer UI,  click the `Delete Blacklist Item` button on the right corner of UI

## Context Menu

![截屏2020-05-04 19.59.18](/assets/images/ae2/00.png)

### Assets Explorer Blacklist

Add selected assets/folders to or remove selected assets/folders from blacklist cache.

### Show In Assets Explorer

Show the selected assets in Assets Explorer. The menu item is disabled when one of below two conditions matched:

1. There is no Assets Explorer Window
2. Multiple type assets are selected. For example, two assets selected, one is a texture and the other is a model

### Select Assets In Selection

Select the assets by type in current seleced objects in Project Window.

### Find References In Project

Find the references assets of the selected assets, similar to the __Find Preferences In Scene__.

## Find Unused Assets

Click `Find Unused Assets` button on `Overview` tab to trigger a build to find unused assets.

![6](/assets/images/ae2/6.png)

### What assets are Unused?

When the assets satisfy one of below condictions are __Used__, others are __Unused__:

* In __Resources__ folder
* In __StreamingAssets__ folder
* Has __AssetBundle__ assigned
* The Assets are the dependencies of an AssetBundle
* In __Unity Build Report__. Because of this one, we have to trigger a build to get the unused file

### How Assets Explorer show the Used/Unused assets?

* When A+ Assets Explorer does not know whehter assets are used or not, `Used` column displays ? mark
* If asset is used, it will display black color nd `Used` column display ✔️ mark
* if asset is unused, it will display grey color and `Used` column display &times; mark

## Data Exporter

![3](/assets/images/ae2/3.png)

Export assets data to a local file. Select menu __Tools__ -> __A+ Assets Explorer 2__ -> __Data Exporter__, currently only CSV is supported. 

### Export to CSV

Select  __Tools__ -> __A+ Assets Explorer 2__ -> __Data Exporter__ -> __Export as CSV...__ to save all data to local csv files.

## Quick Folder Opener

Select Menu __Tools__ -> __A+ Assets Explorer 2__ -> __Quick Folder Opener__ and select folder you want to open.

![4](/assets/images/ae2/4.png)

### Supported Folders:

The Quick Folder Opener can following path in both of Windows and macOS.

* Application.dataPath
* Application.persistentDataPath
* Application.streamingAssetsPath
* Application.temporaryCachePath
* Asset Store Packages Folder
* Asset Backup Folder (the folder that Assets Explorer back files to when deleting assets)
* Editor Application Path
* Editor Log Folder

## Table Headers

Below headers are supported by A+ Assets Explorer 2 currently. If you need more, welcome to send [email](mailto:amlovey@qq.com) to me.

### Textures

Headers | data type | Comments 
--- | --- | --- 
Name | string | File name of texture file 
FileSize | number | The file size of texture file
StorageSize | number | Storage size of texture file
MaxSize | number | Max size of texture
TextureFormat | string | Texture format
ReadWrite | boolean | ReadWrite enable or not
MipMap | boolean | MipMap enabled or not
Type | string | Texture type
WidthInPixel | number | Width of texture in pixel
HeighInPixel | number | Height of texture in pixel
Width | number | Width of texture
Height | number | Height of texture
File Path | string | The file path of the texture file
Unused | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file


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
ReadWrite | boolean | Is readable or not
ImportBlendShapes | boolean | Should Unity import BlendShapes
GenerateColliders | boolean | Should Unity generate mesh colliders for all meshes
LightmapToUV2 | boolean | Generate lightmap UVs to UV2
SwapUVs | boolean | Swaps the 2 UV channels in meshes. Use if your diffuse texture use UVs from lightmap 
Path | string | The file path of the model file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

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
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

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
path | string | The file path of the audio file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

### Movies

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of movie file 
Approx | number | Approx size of the movie
Texture Size | number | Texture size of the movie
Quality | number | Quality of the movie
Duration | number | The duration of the movie
Path | string | The file path of movies file
Used | boolean |Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

### Materials

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of material file 
FileSize | number | File size of material file
Type | string | The type of material: Material or Physics Material
Shader | string | The shader name that material used
Path | string | The file path of material file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

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
Path | string | The file path of shader file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

### StreamingAssets

Headers | data type | Comments
--- | --- | ---
Name | string | File name
FileSize | number | Size of file
Path | string | The file path of file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

### Code files

Headers | data type | Comments
--- | --- | --- 
Name | string | File name
FileSize | number | Size of file
FileType | string | File type of asset file
Path | string | The file path of file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file

### Others

Headers | data type | Comments
--- | --- | --- 
Name | string | File name
FileSize | number | Size of file
FileType | string | File type of asset file
Path | string | The file path of file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets
Hash | String | The hash of the asset file