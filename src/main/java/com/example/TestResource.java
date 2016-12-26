package com.example;

import java.io.IOException;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.ibm.json.java.JSON;
import com.ibm.json.java.JSONArray;
import com.ibm.json.java.JSONObject;
import com.ibm.user.User;
import com.ibm.user.UserDAO;


// This class define the RESTful API to fetch the database service information
// <basepath>/api/hello

@Path("/test")
public class TestResource {

	@GET
	@Produces("application/json")
	@Consumes("application/json")
	public String getInformation(String input) throws Exception, IOException {
        //JSONObject myJSONObj = new JSONObject();
		String result = new String();
		System.out.println("Snehal : " + input);
        JSONObject json = new JSONObject().parse(input);
		UserDAO userDao = new UserDAO();
		User user = userDao.getUser((String) json.get("username"));
		if (user != null)
		{
			if (user.getPassword().equals(json.get("password")))
				result = "Login successful";
		}
		else
			result = "Invalid Credentials";
        //myJSONObj.put("message", "Hello India!");
        return result;
        
	}
}