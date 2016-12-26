package com.ibm.category;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.ibm.user.User;
import com.ibm.util.DbUtil;

public class CategoryDAO {

	private Connection connection;
	PreparedStatement preparedStatement;
	String tableName = "category";
	
	public CategoryDAO () {
		connection = DbUtil.getConnection();
	}
	
	public List<Category> getAllCategories() {
		List<Category> categoryList = new ArrayList<Category>();
		
		try {
            preparedStatement = (PreparedStatement) connection.prepareStatement("select * from "+tableName);
            ResultSet rs = (ResultSet) preparedStatement.executeQuery();

            if (rs.next()) {
            	Category category = new Category();
            	category.setCategory_name(rs.getString("category_name"));
            	category.setImage_url(rs.getString("image_url"));
            	category.setLong_description(rs.getString("long_description"));
            	category.setShort_description(rs.getString("short_description"));
            	categoryList.add(category);
            	System.out.println("Snehal : " + rs.getString("category_name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
	        if (preparedStatement != null) {
	        	try {
					preparedStatement.close();
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
	        }
	    }
		return categoryList;
		
	}
}
