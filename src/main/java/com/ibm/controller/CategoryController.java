package com.ibm.controller;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;


import com.ibm.category.Category;
import com.ibm.category.CategoryDAO;
import com.ibm.json.java.JSONArray;
import com.ibm.json.java.JSONObject;


// This class define the RESTful API to fetch the database service information
// <basepath>/api/hello

@Path("/getCategories")
public class CategoryController {

	@GET
	@Produces("application/json")
	public String getInformation() throws Exception, IOException {
		String result = new String();
		CategoryDAO catDao = new CategoryDAO();
		List<Category> categories = catDao.getAllCategories();
		JSONArray jsonArr = new JSONArray();
		org.json.JSONArray json = new org.json.JSONArray();
		json = json.put(categories);
		result = json.toString();
		System.out.println("Snehal : " + result);
        return result;
        
	}
}