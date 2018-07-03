---
layout: single
title: "Table Headers"
permalink: "/assets-explorer/table-headers/"
sidebar:
  nav: "assets-explorer"
toc: true
---

Below headers are supported by A+ Assets Explorer currently. If you need more, welcome to send [email](mailto:amlovey@qq.com) to me.

## Textures

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
Compress | string | Compress type of textures.
CrunchedCompression | boolean | Use Crunched Compression or not
CompressionQuality | number | Compression Quality of texture
WidthInPixel | number | Width of texture in pixel
HeighInPixel | number | Height of texture in pixel
Width | number | Width of texture
Height | number | Height of texture
File Path | string | The file path of the texture file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets


## Models

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
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Animations

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

## Audios

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
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Movies

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of movie file 
Approx | number | Approx size of the movie
Texture Size | number | Texture size of the movie
Quality | number | Quality of the movie
Duration | number | The duration of the movie
File Path | string | The file path of movies file
Used | boolean |Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Fonts

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of font file 
FontNames | string | Font names
FileSize | number | File size of font file
RenderingMode | string |Rendering mode
Character | string | Character type
File Path | string | The file path of font file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Materials

Headers | data type | Comments 
--- | --- | ---
Name | string | File name of material file 
FileSize | number | File size of material file
Type | string | The type of material: Material or Physics Material
Shader | string | The shader name that material used
File Path | string | The file path of material file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Shaders

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
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## StreamingAssets

Headers | data type | Comments
--- | --- | ---
Name | string | File name
FileSize | number | Size of file
File Path | string | The file path of file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Code files

Headers | data type | Comments
--- | --- | --- 
Name | string | File name
FileSize | number | Size of file
FileType | string | File type of asset file
File Path | string | The file path of file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets

## Others

Headers | data type | Comments
--- | --- | --- 
Name | string | File name
FileSize | number | Size of file
FileType | string | File type of asset file
File Path | string | The file path of file
Used | boolean | Used in the game or not
Id | string | The file guid of assets or file guid with local id of nested assets