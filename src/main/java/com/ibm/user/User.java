package com.ibm.user;


import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

public class User implements Serializable {
	
	private String username;
	private String password;
	private String email;
	private String role;
	
	public User () {
		
	}
	
	public User (String name, String pwd, String email, String role) {
		this.username = name;
		this.password = pwd;
		this.email = email;
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

}
