package com.ibm.servlet;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class AngularServlet extends HttpServlet {
        private static final long serialVersionUID = 1L;

        public AngularServlet() {
                super();
        }

        protected void doGet(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {

                String json = "{\"hello\" : \"world\"}";
                response.setContentType("application/json");
                response.getWriter().write(json);
        }
}
