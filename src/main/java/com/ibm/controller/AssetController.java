package com.ibm.controller;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.json.JSONObject;

import com.ibm.asset.Asset;
import com.ibm.asset.AssetDAO;

@Path("/getAssets")
public class AssetController {
	
	@POST
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
		System.out.println("Snehal : " + result);
        return result;
        
	}

}
