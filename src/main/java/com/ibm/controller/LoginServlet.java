package com.ibm.controller;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;

import com.ibm.user.User;
import com.ibm.user.UserDAO;


public class LoginServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	public LoginServlet () {
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		String userName = request.getParameter("username");
		String password = request.getParameter("password");
//		String result = new String();
		
//		StringBuilder sb = new StringBuilder();
//        BufferedReader br = request.getReader();
//        String str = null;
//        
//        while ((str = br.readLine()) != null) {
//            sb.append(str);
//        }
        
		try {
			//JSONObject jObj = new JSONObject(sb.toString());
			
			//System.out.println("Snehal : " + jObj.toString());
			
			System.out.println("Username:"+userName);
			System.out.println("password:"+password);
			
			UserDAO userDao = new UserDAO();
			User user = userDao.getUser(userName);
			if (user != null)
			{
				if (user.getPassword().equals(password)) {
//					result = "{\"result\":true}";
					HttpSession session = request.getSession();
					session.setAttribute("username", user.getUsername());
					
					response.setContentType("text/html"); 
					RequestDispatcher dispatcher = request.getRequestDispatcher("/admin.html");
			        dispatcher.forward(request, response); 
				}
			}
			else {
				response.setContentType("text/html"); 
				RequestDispatcher dispatcher = request.getRequestDispatcher("/index.html");
		        dispatcher.forward(request, response);
		        
//				response.setContentType("text/html");
//				PrintWriter out = response.getWriter();
//				result = "{\"result\":false}";
//				out.write(result);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
        
    }
	
}
