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


// This class define the RESTful API to fetch the database service information
// <basepath>/api/hello

@Path("/getCategories")
public class CategoryController {

	@POST
	@Produces("application/json")
	public String getInformation() throws Exception, IOException {
		String result = new String();
		CategoryDAO catDao = new CategoryDAO();
		List<Category> categories = catDao.getAllCategories();
		JSONArray jsonArr = new JSONArray();
		jsonArr.addAll(categories);
		result = jsonArr.serialize();
		System.out.println("Snehal : " + result);
        return result;
        
	}
}