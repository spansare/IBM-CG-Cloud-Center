package com.ibm.category;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.ibm.util.DbUtil;

public class CategoryDAO {

	private Connection connection;
	PreparedStatement preparedStatement;
	String tableName = "category";
	
	public CategoryDAO () {
		connection = DbUtil.getConnection();
	}
	
	public JSONObject getAllCategories() {
		List<Category> categoryList = new ArrayList<Category>();
		JSONObject json = new JSONObject();
		ResultSet rs = null;
		
		try {
            preparedStatement = (PreparedStatement) connection.prepareStatement("select * from "+tableName);
            rs = (ResultSet) preparedStatement.executeQuery();

            while (rs.next()) {
            	Category category = new Category();
            	category.setCategory_name(rs.getString("category_name"));
            	category.setImage_url(rs.getString("image_url"));
            	category.setLong_description(rs.getString("long_description"));
            	category.setShort_description(rs.getString("short_description"));
            	category.setCategory_type(rs.getString("category_type"));
            	categoryList.add(category);
            	JSONArray arr = json.optJSONArray(rs.getString("category_type"));
            	if(arr != null) {
            		arr.put(category);
            		System.out.println(arr.toString());
            	} else {
            		arr = new JSONArray();
            		arr.put(category);
            		json.put(rs.getString("category_type"), arr);
            	}
            	System.out.println("Result  : getAllCategories" + rs.getString("category_name"));
            }
        } catch (SQLException | JSONException e) {
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
		System.out.println("Result  : getAllCategories" + categoryList);
		System.out.println("Result  : json" + json);
		//return categoryList;
		return json;
		
	}
	
	public boolean createCategory(Category category) {
		boolean result = false;
		
		try {
			preparedStatement = (PreparedStatement) connection.prepareStatement("insert into " + tableName + "(category_name, short_description, long_description, image_url, category_type) values(?,?,?,?,?)");
			preparedStatement.setString(1, category.getCategory_name());
			preparedStatement.setString(2, category.getShort_description());
			preparedStatement.setString(3, category.getLong_description());
			preparedStatement.setString(4, category.getImage_url());
			preparedStatement.setString(5, category.getCategory_type());
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
	
	public boolean updateCategory(Category category) {
		boolean result = false;
		
		try {
			preparedStatement = (PreparedStatement) connection.prepareStatement("update " + tableName + " set short_description=?, long_description=?, image_url=?, category_type=? where category_name=?");
			
			preparedStatement.setString(1, category.getShort_description());
			preparedStatement.setString(2, category.getLong_description());
			preparedStatement.setString(3, category.getImage_url());
			preparedStatement.setString(4, category.getCategory_type());
			preparedStatement.setString(5, category.getCategory_name());
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
	
	public boolean deleteCategory(String category_name) {
		boolean result = false;
		
		try {
			preparedStatement = (PreparedStatement) connection.prepareStatement("delete from " + tableName + " where category_name=?");
			preparedStatement.setString(1, category_name);
			
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
