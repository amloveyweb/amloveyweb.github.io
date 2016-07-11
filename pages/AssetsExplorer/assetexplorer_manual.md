---
layout: page-fullwidth
title: "Manual Documents"
subheadline: "How to use A+ Assets Explorer"
teaser: "Required A+ Assets Explorer version 1.0.6"
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

A+ Assets Explorer is a better assets explorer extension for Unity Editor, it's easy to use. It provides overview of assets and supports: Textures, Models, Materials, Audios, Movies, Fonts and Shaders.

### Features 

Let's watch a video first.
<div class="flex-video">
  <iframe src="https://www.youtube.com/embed/2iDS5gJdwWE" frameborder="0" allowfullscreen></iframe>
</div>

### Open Asset Explorer

Select the __Assets Explorer__ menu item from the __A+ Assets Explorer__ menu in Unity Editor, or press shortcut __Cmd + SHIFT + W__ in macOS (i.e. OSX) or __Ctrl + SHIFT + W__ on Windows.

#### Find unused assets

Select the __Find unused assets__ menu item from the __A+ Assets Explorer__ menu in Unity Editor, press __Ok__ in pop up dialog.

#### Assets overview report

Click the __Overview__ Tab in Assets Explorer window. __NOTICE:__ the report will show only after we have alreay trigger a build from Unity Editor.

#### Locate assets in Unity

There are two scenarios:

* __Double click a row__ will ping the asset in Project Window of Unity Editor
* __Select the checkbox of rows (one or more)__ and then __click the `Location` button__ in the Assets Explorer Window

#### Customize table headers

1. Open the setting dialog by __Click the `Columns` button__ in the Assets Explorer Window
2. Check/uncheck the checkbox of each header will make it show/hide

If you want to restore the default header settings, just __click the `Restore Default Header Settings` button__.

#### Refresh table

Click the `Refresh` button in the Assets Explorer Window

#### Delete assets

Select the assets you want to delete by check the CheckBox of the rows and __Click the `Remove` button__ in the Assets Explorer Window.

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
MeshCompression | Compress mesh or not
OptimizeMesh | Optimize mesh
File Path | The file path of the model file
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


</div><!-- /.medium-8.columns -->
</div><!-- /.row -->