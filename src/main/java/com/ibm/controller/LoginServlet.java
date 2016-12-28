package com.ibm.controller;


import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.ibm.json.java.JSONObject;
import com.ibm.user.User;
import com.ibm.user.UserDAO;


public class LoginServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	public LoginServlet () {
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String result = new String();
		String input = request.getParameter("data");
		System.out.println("Snehal : " + input);
        JSONObject json = new JSONObject().parse(input);
		UserDAO userDao = new UserDAO();
		User user = userDao.getUser((String) json.get("username"));
		if (user != null)
		{
			if (user.getPassword().equals(json.get("password"))) {
				result = "{\"result\":true}";
				HttpSession session = request.getSession();
				session.setAttribute("username", user.getUsername());
			}
				
		}
		else {
			result = "{\"result\":false}";
		}
		
		response.setContentType("application/json");
        response.getWriter().write(result);
        
        RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("admin.html");
        dispatcher.forward(request, response); 
    }
	
}
