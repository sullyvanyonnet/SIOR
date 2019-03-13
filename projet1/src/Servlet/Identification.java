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

/**
 * Servlet implementation class Accueil
 */
@WebServlet("/Identification")
public class Identification extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Identification() {
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
			String ident = request.getParameter("login");
			String password = request.getParameter("password");
			
			ServletOutputStream out = response.getOutputStream();
			ObjectMapper objectMapper = new ObjectMapper();
			
			out.write(objectMapper.writeValueAsBytes(SendUrl.executeGet("127.0.0.1/api/test", "login=toto&password=tata")));
			out.close();
		}catch( Exception E) {
			
		}

	}

}