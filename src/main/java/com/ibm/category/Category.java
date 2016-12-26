package com.ibm.category;

public class Category {

	private String category_name;
	private String short_description;
	private String long_description;
	private String image_url;
	
	public Category() {
		
	}
	
	public Category(String catname, String short_desc, String long_desc, String img_url) {
		this.category_name = catname;
		this.short_description = short_desc;
		this.long_description = long_desc;
		this.image_url = img_url;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
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
}
