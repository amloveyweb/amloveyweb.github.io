---
title: "Extend Assets Explorer"
layout: single
sidebar:
  nav: "assetsexplorer2"
permalink: "/assetexplorer2/extend/"
---

### Add new asset category

Assets Explorer will detect classes in Editor assembly (c# files under Editor folder in Projector), if anyone is inherited from `AssetCategory` class, a new asset category will be added into Asset Explorer UI.

Below is the sample code for add new category base on scriptable object assets.

```c#
using System.Collections.Generic;
using UnityEngine;
using APlus2;
using System;
using UnityEditor;

/// <summary>
/// Change your scriptable object inherit from APScriptableObject class
/// </summary>
[CreateAssetMenu]
public class DemoScript : APScriptableObject
{
    public int Strong;
}

/// <summary>
/// Create a asset class inherit from APAsset form caching
/// </summary>
public class DemoScriptAsset : APAsset
{
    public int Strong;
}

/// <summary>
/// Change your scriptable object editor script to inherit from APAssetImporter class
/// </summary>
[CanEditMultipleObjects]
[CustomEditor(typeof(DemoScript))]
public class DemoScriptEditor : APAssetImporter<DemoScript, DemoScriptAsset>
{
    /// <summary>
    /// If needs update asset in cache or not?
    /// </summary>
    protected override bool ShouldUpdate(DemoScriptAsset cachItem, DemoScript target)
    {
        return cachItem.Strong != target.Strong;
    }

    /// <summary>
    /// Copy data to asset in cache
    /// </summary>
    protected override DemoScriptAsset TargetToAsset(DemoScript target, DemoScriptAsset currentAsset)
    {
        currentAsset.Strong = target.Strong;
        return currentAsset;
    }
}

/// <summary>
/// If class inherit from AssetCategory class, a new asset category will be added into Asset Explorer UI
/// </summary>
public class DemoScriptAssetCategory : AssetCategory
{
    public override void AddAsset(string assetPath)
    {
        AddAsset<DemoScriptAsset>(assetPath, GetDemoScriptAssetFromGuid);
    }

    public override string CreateAssetType()
    {
        return "demoscript";
    }

    public override Dictionary<string, ColumnAction> CreateColumnActions()
    {
        // Key have to be lower case
        return new Dictionary<string, ColumnAction>()
        {
            { "demoscriptasset_strong", new LabelColumnAction<DemoScriptAsset>(asset => asset.Strong.ToString(), asset => asset.Strong) },
        };
    }

    public override List<Column> CreateColumns()
    {
        // Key format is [ClassName]_[FieldName]
        return new List<Column>()
        {
            Column.CreateInstance("APAsset_Name", "Name", 240),
            Column.CreateInstance("APAsset_FileSize", "FileSize", false),
            Column.CreateInstance("DemoScriptAsset_Strong", "strong", 140),
            Column.CreateInstance("APAsset_Path", "Path", 360, false),
            Column.CreateInstance("APAsset_Used", "Used"),
            Column.CreateInstance("APAsset_Id", "Id", 280, false),
            Column.CreateInstance("APAsset_Hash", "Hash", 280, false),
            Column.CreateInstance("APAsset_InAssetBundle", "InAssetBundle", 140, false)
        };
    }

    public override NaviMenuItem CreateMenu()
    {
        return new NaviMenuItem(Icons.Others, this.CreateAssetType(), "Demo Script");
    }

    public override APOverviewItem CreateOverviewItem(AppState state)
    {
        var assets = state.GetAssetCacheItem(this.CreateAssetType()).assets;
        return CreateItem(
            assets.Count,
            GetTotalFileSize(assets),
            GetUsedStorageSize<DemoScriptAsset>(assets, tex => tex.FileSize),
            GetStorageSize<DemoScriptAsset>(assets, tex => tex.FileSize)
        );
    }

    public override List<APAsset> GetAssets()
    {
        return AssetsHelper.GetAssetsListByType<APAsset>("DemoScript", GetDemoScriptAssetFromGuid);
    }

    private static DemoScriptAsset GetDemoScriptAssetFromGuid(string id)
    {
        var path = AssetDatabase.GUIDToAssetPath(id);
        DemoScript script = AssetDatabase.LoadAssetAtPath<DemoScript>(path);
        
        DemoScriptAsset asset = new DemoScriptAsset();
        asset.Id = id;
        asset.Path = path;
        asset.Hash = Utilities.GetFileMd5(path);
        asset.Name = Utilities.GetFileName(path);
        asset.FileSize = Utilities.GetFileSize(path);
        asset.Strong = script.Strong;
        return asset;
    }

    public override bool IsMatch(UnityEngine.Object obj)
    {
        return obj is DemoScript;
    }

    public override Type RegisterAPAssetClass()
    {
        return typeof(DemoScriptAsset);
    }

    public override void UpdateAsset(string assetPath)
    {
        UpdateAsset<DemoScriptAsset>(assetPath, GetDemoScriptAssetFromGuid);
    }
}
```