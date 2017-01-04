package com.ibm.controller;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.ibm.asset.Asset;
import com.ibm.asset.AssetDAO;
import com.ibm.util.GenericHelper;

@Path("/AssetService")
public class AssetController {
	
	@POST
	@Path("/getAssets")
	@Produces("application/json")
	@Consumes("application/json")
	public String getInformation(String input) throws Exception, IOException {
		
		String result = new String();
		System.out.println("Input : " + input);
		JSONObject json = new JSONObject(input);
		JSONObject assetJson = new JSONObject();
		AssetDAO assetDao = new AssetDAO();
		List<Asset> assets = assetDao.getAssetsByCategory(json.getString("category"));
		assetJson = assetJson.put("result", assets);
		result = assetJson.toString();
		System.out.println("Result  /getAssets: " + result);
        return result;
        
	}
	
	@POST
	@Path("/createAsset")
	@Produces("text/plain")
	@Consumes("application/json")
	public String createAsset(String input) {
		String result = new String();
		
		try {
			JSONObject json = new JSONObject(input);
			AssetDAO assetDao = new AssetDAO();
			Asset asset = new Asset();
			System.out.println("Create Asset Input : " + json);
			asset.setAsset_title(json.getString("name"));
			JSONArray arr = json.getJSONArray("category");
			asset.setCategory(GenericHelper.jsonArrToString(arr));
			asset.setShort_description(json.getString("short_description"));
			asset.setLong_description(json.getString("long_description"));
			asset.setImage_url(json.getString("image_url"));
			asset.setDocument_url(json.getString("document_url"));
			asset.setDemo_url(json.getString("demo_url"));
			asset.setOwner(json.getString("owner"));
			asset.setBusiness_unit(json.getString("business_unit"));
			
			boolean res = assetDao.createAsset(asset);
			
			if(res)
				result = "Asset created successfully!!!";
			else
				result = "Asset creation failed. Check logs for more details.";
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return result;
	}
	
	@POST
	@Path("/updateAsset")
	@Produces("text/plain")
	@Consumes("application/json")
	public String updateAsset(String input) {
		String result = new String();
		
		try {
			JSONObject json = new JSONObject(input);
			AssetDAO assetDao = new AssetDAO();
			Asset asset = new Asset();
			
			asset.setAsset_title(json.getString("name"));
			asset.setCategory(json.getString("category"));
			asset.setShort_description(json.getString("short_description"));
			asset.setLong_description(json.getString("long_description"));
			asset.setImage_url(json.getString("image_url"));
			asset.setDocument_url(json.getString("document_url"));
			asset.setDemo_url(json.getString("demo_url"));
			asset.setOwner(json.getString("owner"));
			asset.setBusiness_unit(json.getString("business_unit"));
			
			boolean res = assetDao.updateAsset(asset);
			
			if(res)
				result = "Asset updated successfully!!!";
			else
				result = "Asset update failed. Check logs for more details.";
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return result;
	}
	
	@POST
	@Path("/deleteAsset")
	@Produces("text/plain")
	@Consumes("application/json")
	public String deleteAsset(String input) {
		String result = new String();
		
		try {
			JSONObject json = new JSONObject(input);
			AssetDAO assetDao = new AssetDAO();
			String asset_title = json.getString("name");
			
			System.out.println("Asset to be deleted : " + asset_title);
			
			boolean res = assetDao.deleteAsset(asset_title);
			
			if(res)
				result = "Asset deleted successfully!!!";
			else
				result = "Asset deletion failed. Check logs for more details.";
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return result;
	}

}
