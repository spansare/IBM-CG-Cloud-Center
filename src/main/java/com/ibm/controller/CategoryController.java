package com.ibm.controller;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.json.JSONObject;

import com.ibm.category.Category;
import com.ibm.category.CategoryDAO;


// This class define the RESTful API to fetch the database service information
// <basepath>/api/hello

@Path("/CategoryService")
public class CategoryController {

	@GET
	@Path("/getCategories")
	@Produces("application/json")
	public String getInformation() throws Exception, IOException {
		String result = new String();
		JSONObject categoryJson = new JSONObject();
		CategoryDAO catDao = new CategoryDAO();
		List<Category> categories = catDao.getAllCategories();
		categoryJson = categoryJson.put("result", categories);
		result = categoryJson.toString();
		System.out.println("Result : " + result);
        return result;
        
	}
}