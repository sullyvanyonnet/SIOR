package base;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.ResourceBundle;


public class Base {
	
	Connection connection = null;
	
	public Base() {
		String url = null;
		String user = null;
		String password = null;

		// accès au ressources (fichier base/config.properties)
		try {
			ResourceBundle rs = 
				ResourceBundle.getBundle("base/config");
			url = rs.getString("url");
			user = rs.getString("user");
			password = rs.getString("password");
			System.out.println("url = "+url);
			System.out.println("user = "+user);
		}
		catch (Exception e) {
			System.out.println("Erreur acces ressources "+e.getMessage());
		}
		
		// connexion BD
		try  {
			Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
			this.connection = DriverManager.getConnection("jdbc:mysql://obiwan2.univ-brest.fr/zfm1-zyonnetsu?user=zyonnetsu&password=1ht7p865");
		}
		catch (Exception e) {
			System.out.println("Erreur connexion "+e.getMessage());
		}
	}
	
	public void fermer() {
		try {if (connection != null) connection.close();} catch (Exception e) {}
	}
	
	public int enregistrer(String sql)  {
		Integer res = null;
		try {
			PreparedStatement ps = connection.prepareStatement(sql);
			System.out.println("sql = " + ps.toString());
			res = ps.executeUpdate();
		} catch (Exception e) {
			System.out.println(
					"Erreur enregistrer ");
			e.printStackTrace();
		}

		return res;
	}
		
}
