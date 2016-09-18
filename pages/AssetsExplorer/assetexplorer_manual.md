---
layout: page-fullwidth
title: "Manual Documents"
subheadline: "How to use A+ Assets Explorer"
teaser: "Required A+ Assets Explorer version 1.1.3"
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

A+ Assets Explorer is an easy to use assets explorer extension for Unity Editor, provides a different style of overview and management of assets, and is ready for large project. It's not a replacement of Project Window of Unity Editor, but an enhancement.

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

Headers | Comments 
--- | ---
Name | File name of texture file 
FileSize | The file size of texture file
StorageSize | Storage size of texture file
MaxSize | Max size of texture
TextureFormat | Texture format
R&W | ReadWrite enable or not
MM | MipMap enabled or not
Type | Texture type
WidthInPixel | Width of texture in pixel
HeighInPixel | Height of texture in pixel
Width | Width of texture
Height | Height of texture
File Path | The file path of the texture file
Unused | Used in the game or not


#### Models

Headers | Comments 
--- | ---
Name | File name of texture file 
FileSize | The file size of model file
VertexCount | Vertex count of model
Tris | Tris count of model
ScaleFactor | Scale factor of model
MeshCmp | Compress mesh or not
OptimizeMesh | Optimize mesh
R/W Enable | Is readable or not
ImportBlendShapes | Should Unity import BlendShapes
GenerateColliders | Should Unity generate mesh colliders for all meshes
LightmapToUV2 | Generate lightmap UVs to UV2
SwapUVs | Swaps the 2 UV channels in meshes. Use if your diffuse texture use UVs from lightmap 
File Path | The file path of the model file
Unused | Used in the game or not

#### Animations

Headers | Comments
--- | ---
Name | Name of animation
In File | In which file
Length | Frame Length 
FPS | Frame per second
LoopTime | Loop animation or not
LoopPose | Loop pose or not
CycleOffset | Cycle Offset
Path | The file path of animation file
Unused | Used in the game or not

#### Audios

Headers | Comments 
--- | ---
Name | File name of audio file 
ImportedSize | The size after imported
FileSize | The file size of audio file
Ratio | Compress ratio
Frequency | Audio frequency
Compress Format | Compress format of audio
Duration | Duration of the audio
Quality | Quality of the audio 
Background | Run in background
File path | The file path of the audio file
Unused | Used in the game or not

#### Movies

Headers | Comments 
--- | ---
Name | File name of movie file 
Approx | Approx size of the movie
Texture Size | Texture size of the movie
Quality | Quality of the movie
Duration | The duration of the movie
File Path | The file path of movies file
Unused | Used in the game or not

#### Fonts

Headers | Comments 
--- | ---
Name | File name of font file 
FontNames | Font names
FileSize |  File size of font file
RenderingMode | Rendering mode
Character | Character type
File Path | The file path of font file
Unused | Used in the game or not

#### Materials

Headers | Comments 
--- | ---
Name | File name of material file 
FileSize | File size of material file
Type | The type of material: Material or Physics Material
Shader | The shader name that material used
File Path | The file path of material file
Unused | Used in the game or not

#### Shaders

Headers | Comments 
--- | ---
Name | Shader name
FileName | Name of shader file
FileSize | Size of shader file
RenderQueue | Render Queue
LOD | Level of Detail
VariantsIncluded | Shader variants only in scene
VariantsTotal | All shader variants
SurfaceShader | has surface shader or not
CastShadows | Cast shadows or not
IgnoreProjector | Ignore projector or not
DisableBatching | Batch is disabled or not
File Path | The file path of shader file
Unused | Used in the game or not

#### StreamingAssets

Headers | Comments
--- | ---
Name | File name
FileSize | Size of file
File Path | The file path of file
Unused | Used in the game or not

#### Code files
Headers | Comments
--- | ---
Name | File name
FileSize | Size of file
File Path | The file path of file
Unused | Used in the game or not

### Known Issues

* Assets Explorer will not refresh data automatically sometimes after click `play` button or you change your scripts. Re-open the Assets Explor is a workaround for this issue for now. __This issue was fixed after v1.1.2.__
* Sometime, cache will broken by unexcepted operation and Assets Explorer will not display data. `Refresh cache data` will slove the issue.

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->