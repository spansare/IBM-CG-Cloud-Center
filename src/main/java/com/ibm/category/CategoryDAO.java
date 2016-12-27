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

            while (rs.next()) {
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
	
	public boolean createCategory(Category category) {
		boolean result = false;
		
		try {
			preparedStatement = (PreparedStatement) connection.prepareStatement("insert into " + tableName + "(category_name, short_description, long_description, image_url) values(?,?,?,?)");
			preparedStatement.setString(1, category.getCategory_name());
			preparedStatement.setString(2, category.getShort_description());
			preparedStatement.setString(3, category.getLong_description());
			preparedStatement.setString(4, category.getImage_url());
			preparedStatement.executeUpdate();			
			result = true;
		} catch (SQLException e) {
			e.printStackTrace();
			result = false;
		} finally {
	        if (preparedStatement != null) {
	        	try {
					preparedStatement.close();
					connection.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	        }
	    }
		
		return result;
	}
}
