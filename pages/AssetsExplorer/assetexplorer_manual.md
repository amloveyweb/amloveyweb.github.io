---
layout: page-fullwidth
title: "Manual Documents"
subheadline: "How to use A+ Assets Explorer"
teaser: "Required A+ Assets Explorer version 1.1.6"
permalink: "/assetexplorer/manual"
---
<div class="row">
<div class="medium-4 medium-push-8 columns" markdown="1">
<div class="panel radius" markdown="1">
#### Table of Content 
{: #toc }
* TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->

<div class="medium-8 medium-pull-4 columns" markdown="1">

### Introduction

A+ Assets Explorer is an easy to use assets explorer extension for Unity Editor, provides different style of assets management and several workflow improvement tools. It is ready for large project.

Supports: 

* Textures 
* Models 
* Materials 
* Animations 
* Prefabs
* Audios 
* Movies
* Fonts
* Shaders
* Code files
* StreamingAssets

### Features 

Recommend you to watch the videos first: <https://www.youtube.com/user/TestaccountENUS>

#### Open Asset Explorer

Select the __Assets Explorer__ menu item from the __A+ Assets Explorer__ menu in Unity Editor, or press shortcut __Cmd + SHIFT + W__ in macOS (i.e. OSX) or __Ctrl + SHIFT + W__ on Windows.

#### Find unused assets

Select the __Find unused assets__ menu item from the __A+ Assets Explorer__ menu in Unity Editor, press __Ok__ in pop up dialog. This feature is base on the build report of Unity, so it means the unused assets will not package into game application for current build target platform. __Just a reminder for you that__ double check the assets before delete it. Because the assets will not goes into game applicaiton, not means it's not used in Editor mode or other build target platform.

#### Assets overview report

Click the __Overview__ Tab in Assets Explorer window. __NOTICE:__ the report will show only after we have alreay trigger a build from Unity Editor.

#### Selection

There are four ways to select assets in Assets Explorer:

* Check the `checkbox` in the front of a row
* Select all assets by check the `checkbox` in the table header
* __SHIFT + Left mouse button click__ to bulk selection
* __`CTRL` (on Windows)/`command` (On macOS/OSX) + Left mouse button click__ to toggle row selection

#### Locate assets in Unity

There are two scenarios:

* __Double click a row__ will ping the asset in Project Window of Unity Editor
* __Select rows (one or more)__ and then __click the `Location` button__ in the Assets Explorer Window

#### Search Assets

Assets Explor supports search assets using UI and type search condition directly in __Search Input__ on right corner of Asset Explorer UI.

Assets Explorer supports multiple asset properties search. For each property, the search condition format is 

> \[AssetPropertyDataHeader]&nbsp; : &nbsp;\[>\|<] &nbsp;\[SearchValue]  

For the above format:

 - `[AssetPropertyDataHeader]` is the table header in Assets Explorer
 - `Colon` is Required, it connects data header and its value
 - `[>|<]` is not needed for string type property. For number type property, if it's not specified, it will default to `>`
 - `[SearchValue]` is the property value we want to search

__NOTE:__ if there are no valid search format, the input string will trust as the search vaule of __Name__ property of assets.

Below are samples for texture searching:

> 1. `Name:icon` means searching the textures whose name contains 'icon' chars
> 2. `StorageSize:>1024` means searching the textures whose storage size is larger than 1024 KB
> 3. `MaxSize:<2048` means searching the textures whose import parameter MaxSize is less than 2048

For multiple conditions, each search condition will always be `AND` logic. Take textures search for example:

> `StorageSize:>1000 KB MaxSize:>1024`  
>    
>  _means:_
>      
>  search the texture with storage size is larger than 1000KB __and__ import parameter MaxSize is larger than 1024

A video demo also can found in <https://www.youtube.com/watch?v=MBwcCTyqhnc>.

#### Customize table headers

1. Open the setting dialog by __Click the `Columns` button__ in the Assets Explorer Window
2. Check/uncheck the checkbox of each header will make it show/hide

If you want to restore the default header settings, just __click the `Restore Default Header Settings` button__.

#### Refresh table

Click the `Refresh` button in the Assets Explorer Window

#### Delete assets

Select the assets you want to delete by check the CheckBox of the rows and __Click the `Remove` button__ in the Assets Explorer Window.

#### Quick Folder Opener

The Quick Folder Opener can following path in both of Windows and macOS.

* Application.dataPath
* Application.persistentDataPath
* Application.streamingAssetsPath
* Application.temporaryCachePath
* Asset Store Packages Folder
* Editor Application Path

#### Scene Explorer

More details see [this page](http://www.amlovey.com/SceneExplorer/).

### Preferences Item

#### Color Theme

Currently Assets Explorer supports three theme:

* __Classic:__ White theme, it's default setting.
* __Personal:__ Grey theme, it's for Unity Personal Editor Skin.
* __Pro:__ Black theme, it's for Unity Profressional Editor Skin.

#### Creating cache automatically

Whether creating cache automatically. 

* `Checked` for creating cache data automatically every time re-open project. The is default setting
* `Uncheck` for read cache data from local disk. If there are no cache data file exists, Assets Explor will create one. 

#### Using dockable window style

Whether using dockable window style.

* `Checked` for yes, dockable window style
* `Uncheck` for no and will using utility window. Utility windows will always be in front of normal windows, and will be hidden when user switches to another application

#### Code File Extensions

Customize the code file extension. Format as `*.[extensions]`. For example, CSharp file is "*.cs". Using `;` to combine multiple code files.

### Table Headers 

Below headers are support by A+ Assets Explorer currently. If you need more, welcome to send [email](mailto:amlovey@qq.com) to me.

#### Textures

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


#### Models

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

#### Animations

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

#### Audios

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

#### Movies

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of movie file 
Approx | number | Approx size of the movie
Texture Size | number | Texture size of the movie
Quality | number | Quality of the movie
Duration | number | The duration of the movie
File Path | string | The file path of movies file
Unused | boolean |Used in the game or not

#### Fonts

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of font file 
FontNames | string | Font names
FileSize | number | File size of font file
RenderingMode | string |Rendering mode
Character | string | Character type
File Path | string | The file path of font file
Unused | boolean | Used in the game or not

#### Materials

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of material file 
FileSize | number | File size of material file
Type | string | The type of material: Material or Physics Material
Shader | string | The shader name that material used
File Path | string | The file path of material file
Unused | boolean | Used in the game or not

#### Shaders

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

#### StreamingAssets

Headers | data type | Comments
--- | --- | ---
Name | string | File name
FileSize | number | Size of file
File Path | string | The file path of file
Unused | boolean | Used in the game or not

#### Code files


Headers | data type | Comments
--- | --- | --- 
Name | string | File name
FileSize | number | Size of file
File Path | string | The file path of file
Unused | boolean | Used in the game or not

### Known Issues

* Assets Explorer will not refresh data automatically sometimes after click `play` button or you change your scripts. Re-open the Assets Explor is a workaround for this issue for now. __This issue was fixed after v1.1.2.__
* Sometime, cache will broken by unexcepted operation and Assets Explorer will not display data. `Refresh cache data` will slove the issue.

### Get A+ Asset Explorer
<br/>
<br/>
<iframe src="https://api.assetstore.unity3d.com/affiliate/embed/package/57335/widget-wide?aid=1011lGoJ" style="width:600px; height:130px; border:0px;"></iframe>
<br>
<br>
<iframe src="https://api.assetstore.unity3d.com/affiliate/embed/list/top-paid/widget-wide-light?aid=1011lGoJ" style="width:600px; height:100px; border:0px;"></iframe>
</div><!-- /.medium-8.columns -->
</div><!-- /.row -->

