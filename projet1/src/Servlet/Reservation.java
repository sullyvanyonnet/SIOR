package Servlet;

import java.io.IOException;
import java.sql.*;

import java.net.HttpURLConnection;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import base.Base;
import manager.Manager;
import manager.Res;
import base.Base;

/**
 * Servlet implementation class Accueil
 */
@WebServlet("/Reservation")
public class Reservation extends HttpServlet {
	private static final long serialVersionUID = 1L;

	static final String JDBC_DRIVER = "org.mariadb.jdbc.Driver";
	static final String DB_URL = "jdbc:mariadb://obiwan2.univ-brest.fr/zfm1-zyonnetsu";

	// Database credentials
	static final String USER = "zyonnetsu";
	static final String PASS = "1ht7p865";

	/**
	 * @see HttpServlet#HttpServlet()
	 */

	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setAttribute("titre", "Identification");
		request.setAttribute("contenu", "/index.html");
		request.getServletContext().getRequestDispatcher("/index.html").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// objet partagé enregistré en session
		Manager manager = Manager.init(request);
		// chercher l'objet manager en session
		// request.getSession().getAttribute("manager")
		// si non null : on a l'objet
		// si null : on instancie un objet Manager
		// et on l'enregistre en session

		Res r = new ObjectMapper().readValue(request.getReader(), Res.class);
		Integer cli_id = r.getCli_id();
		Integer voy_id = r.getVoy_id();
		Integer resultat = null;

		Base base = new Base();
		String sql = "INSERT INTO Reservation " + "(cli_id, voy_id)  " + " VALUES (" + cli_id + ", " + voy_id + ");";
		
		resultat = base.enregistrer(sql);
		System.out.println("Reservation effectuée!");

		ServletOutputStream out = response.getOutputStream();
		ObjectMapper objectMapper = new ObjectMapper();

		out.write(objectMapper.writeValueAsBytes(resultat));
		out.close();

	}

}