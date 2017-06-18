---
title: "Search Assets"
layout: single
permalink: "/assets-explorer/search-assets/"
sidebar:
    nav: "assets-explorer"
---
<iframe width="640" height="360" src="https://www.youtube.com/embed/dF0f_83SM0Y" frameborder="0" allowfullscreen></iframe>

<br/>
A+ Assets Explorer supports two ways to search your assets: 

1. Type condictions string into input and press `ENTER` on the keyboard
2. Click the `Search` button to Open Search UI
3. Double click the search input will open the history window

## Search Condition Format

Searching in Assets Explorer supports multiple asset properties. For each property, the search condition format is 

> \[AssetPropertyDataHeader]&nbsp; : &nbsp;\[>\|<] &nbsp;\[SearchValue]  

For the above format:

 - `[AssetPropertyDataHeader]` is the table header in Assets Explorer
 - `:` is Required, it connects data header and its value
 - `[>|<]` is not needed for `string` type property. For `number` type property, if it's not specified, it will default to `>`
 - `[SearchValue]` is the property value we want to search. For `string` type, if you have serveral keywords to search, use `|` to combine them

__NOTE:__ if there are no valid search format, the input string will trust as the search vaule of __Name__ property of assets.

## Samples:

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