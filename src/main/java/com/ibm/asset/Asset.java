package com.ibm.asset;

public class Asset {
	private String asset_title;
	private String category;
	private String short_description;
	private String long_description;
	private String image_url;
	private String document_url;
	private String demo_url;
	
	public Asset() {
		
	}
	
	public Asset(String asset_title, String category, String short_description, String long_description, String image_url, String document_url, String demo_url) {
		this.asset_title = asset_title;
		this.category = category;
		this.short_description = short_description;
		this.long_description = long_description;
		this.image_url = image_url;
		this.document_url = document_url;
		this.demo_url = demo_url;
	}

	public String getAsset_title() {
		return asset_title;
	}

	public void setAsset_title(String asset_title) {
		this.asset_title = asset_title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getShort_description() {
		return short_description;
	}

	public void setShort_description(String short_description) {
		this.short_description = short_description;
	}

	public String getLong_description() {
		return long_description;
	}

	public void setLong_description(String long_description) {
		this.long_description = long_description;
	}

	public String getImage_url() {
		return image_url;
	}

	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}

	public String getDocument_url() {
		return document_url;
	}

	public void setDocument_url(String document_url) {
		this.document_url = document_url;
	}

	public String getDemo_url() {
		return demo_url;
	}

	public void setDemo_url(String demo_url) {
		this.demo_url = demo_url;
	}
}
