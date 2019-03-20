package base;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.ResourceBundle;

import annotation.Id;
import annotation.Table;
import bean.Livre;
import bean.LivreAnnotation;

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
			connection = DriverManager.getConnection(url, user, password);
		}
		catch (Exception e) {
			System.out.println("Erreur connexion "+e.getMessage());
		}
	}
	
	public void fermer() {
		try {if (connection != null) connection.close();} catch (Exception e) {}
	}

	public ArrayList<Livre> listerLivres() {
		
		ArrayList<Livre> res = new ArrayList<>();
		
		String sql = "select * from t_livre";
		
		try {
			PreparedStatement ps = connection.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				int idLivre = rs.getInt("idLivre");
				String titre = rs.getString("titre");
				String auteur = rs.getString("auteur");
				int annee = rs.getInt("annee");
				Livre l = new Livre(titre, auteur, annee);
				l.setIdLivre(idLivre);
				res.add(l);
			}
		}
		catch (Exception e) {
			System.out.println(
					"Erreur listerLivres "+e.getMessage());
		}
		
		return res;
	}
	
	public int enregistrer(String sql)  {
		Integer res = null;
		try {
			PreparedStatement ps = connection.prepareStatement(sql);
			System.out.println("sql = " + ps.toString());
			res = ps.executeUpdate();
		} catch (Exception e) {
			System.out.println(
					"Erreur enregistrer "+e.getMessage());
		}

		return res;
	}
		
}
