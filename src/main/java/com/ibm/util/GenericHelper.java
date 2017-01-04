package com.ibm.util;

import org.json.JSONArray;
import org.json.JSONException;

public class GenericHelper {

	public static String jsonArrToString(JSONArray arr) {
		String result = new String();
		
		try {
			for (int i = 0; i < arr.length() ; i++){
				result = result + arr.getString(i);
				if (i < (arr.length() - 1))
					result = result + ",";
			}
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("jsonArrToString : " + result);
		return result;
	}
}
