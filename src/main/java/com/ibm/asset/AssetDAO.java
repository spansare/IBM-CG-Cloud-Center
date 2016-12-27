package com.ibm.asset;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.ibm.util.DbUtil;

public class AssetDAO {

	private Connection connection;
	PreparedStatement preparedStatement;
	String tableName = "asset";
	
	public AssetDAO() {
		connection = DbUtil.getConnection();
	}
	
	public List<Asset> getAssetsByCategory(String category) {
		List<Asset> assetList = new ArrayList<Asset>();
		System.out.println("Snehal : " + category);
		try {
            preparedStatement = (PreparedStatement) connection.prepareStatement("select * from " + tableName + " where category=?");
            preparedStatement.setString(1, category);
            ResultSet rs = (ResultSet) preparedStatement.executeQuery();
            
            while (rs.next()) {
            	Asset asset = new Asset();
            	asset.setAsset_title(rs.getString("asset_title"));
            	asset.setCategory(category);
            	asset.setImage_url(rs.getString("image_url"));
            	asset.setDocument_url(rs.getString("document_url"));
            	asset.setDemo_url(rs.getString("demo_url"));
            	asset.setLong_description(rs.getString("long_description"));
            	asset.setShort_description(rs.getString("short_description"));
            	assetList.add(asset);
            	System.out.println("Snehal : " + rs.getString("asset_title"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
	        if (preparedStatement != null) {
	        	try {
					preparedStatement.close();
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
	        }
	    }
		
		return assetList;
	}
}
