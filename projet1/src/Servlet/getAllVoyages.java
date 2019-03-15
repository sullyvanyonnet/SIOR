package Servlet;

import java.io.IOException;

import java.net.HttpURLConnection;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import manager.Manager;
import manager.Voyage;

/**
 * Servlet implementation class Accueil
 */
@WebServlet("/getAllVoyages")
public class getAllVoyages extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public getAllVoyages() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		request.setAttribute("titre", "Identification");
		request.setAttribute("contenu", "/index.html");
		request.getServletContext().getRequestDispatcher(
				"/index.html").
					forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// objet partagé enregistré en session
		Manager manager = Manager.init(request);
		// chercher l'objet manager en session
		// request.getSession().getAttribute("manager")
		// si non null : on a l'objet
		// si null : on instancie un objet Manager
		// et on l'enregistre en session
		try {
			HttpURLConnectionExample con = new HttpURLConnectionExample();
			Voyage v = new ObjectMapper().readValue(request.getReader(), Voyage.class);
			
			Integer idMax = null;
			if(v != null) {
				idMax = v.getIdMax();
			}
			
			
			ServletOutputStream out = response.getOutputStream();
			ObjectMapper objectMapper = new ObjectMapper();
			
			out.write(objectMapper.writeValueAsBytes([{"voy_id":1,"voy_nom":"Croisière dans le secteur de Koprulu","voy_debut":"2012-03-18T23:00:00.000Z","voy_fin":"2019-03-18T23:00:00.000Z","pho_id":1,"pho_chemin":"./images/korhal-starcraft_987563239.jpg"},{"voy_id":2,"voy_nom":"Randonnée en westeros","voy_debut":"2021-03-18T23:00:00.000Z","voy_fin":"2030-03-18T23:00:00.000Z","pho_id":3,"pho_chemin":"./images/7d5d9f0055fbf4f6c0f609e87e211463.jpg"}]
	                ));
			out.close();
			/*
out.write(objectMapper.writeValueAsBytes(
					con.sendGet("http://localhost:9000/api/getAllVoyages?voy_id=" + idMax)));
			out.close();*/
		}catch( Exception E) {
			
		}

	}

}