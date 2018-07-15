---
title: "FAQ - uCodeEditor"
layout: single
sidebar:
  nav: "uce"
permalink: "/uce/faq/"
toc: true
---

### 1. The package size is large than 60M, it too big, can we reduce the size?

There are three Omnisharp packages in the package, one for macOS, one for x86 Windows and one for x64 Windows. They can be removed after Omnisharp is installed on machine. This reduce about 50M size. The packages are under path: __uCodeEditor/Editor/Data/Omnisharp__.

But it has disadvantage that package without the Omnisharp packages cannot be ported to other machines.
