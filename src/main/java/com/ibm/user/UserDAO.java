package com.ibm.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.ibm.util.DbUtil;

public class UserDAO {

	private Connection connection;
	PreparedStatement preparedStatement;
	String tableName = "user";
	
	public UserDAO () {
		connection = DbUtil.getConnection();
	}
	
	public User getUser(String username) {
		User user = null;
		
		try {
            preparedStatement = (PreparedStatement) connection.prepareStatement("select * from "+tableName+" where username=?");
            preparedStatement.setString(1, username);
            ResultSet rs = (ResultSet) preparedStatement.executeQuery();

            if (rs.next()) {
            	user = new User();
            	user.setUsername(rs.getString("username"));
            	user.setPassword(rs.getString("password"));
            	user.setEmail(rs.getString("email"));
            	user.setRole(rs.getString("role"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
	        if (preparedStatement != null) {
	        	try {
					preparedStatement.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
	        }
	    }
		
		return user;
	}
}
