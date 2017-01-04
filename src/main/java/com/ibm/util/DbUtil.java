package com.ibm.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbUtil {
    private static Connection connection = null;

    public static Connection getConnection() {
    	try {
    		if (connection != null && !connection.isClosed())
            	return connection;
    	} catch (SQLException e) {
    		e.printStackTrace();
    	}

        try {
        	try {
				Class.forName("com.mysql.jdbc.Driver").newInstance();
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
        	 
            System.out.println("Connecting....");

            VCAPUtils mydb = new VCAPUtils();
            //connection = DriverManager.getConnection(mydb.getDBUrl(),mydb.getDBUser(),mydb.getDBPassword());
            connection = DriverManager.getConnection("jdbc:mysql://us-cdbr-iron-east-04.cleardb.net/ad_6bca05beb542155?user=b6060febd5eb31&password=55d75af9","b6060febd5eb31","55d75af9");
 
            System.out.println("--- DB Connection is successfull............");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
            
        return connection;

    }
    
    public static void closeConnection(){
    	try {
    		if (connection != null) {
    			System.out.println("Closing db connection...");
    			connection.close();
    		}
    	} catch(SQLException e) {
          	e.printStackTrace();
        }
    	
    }

}