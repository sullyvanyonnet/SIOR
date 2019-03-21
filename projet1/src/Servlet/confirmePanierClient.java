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
import manager.User;

/**
 * Servlet implementation class Accueil
 */
@WebServlet("/confirmePanierClient")
public class confirmePanierClient extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public confirmePanierClient() {
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
			Res r = new ObjectMapper().readValue(request.getReader(), Res.class);
			
			Integer res_id = null;
			Integer cli_id = null;
			Integer voy_id = null;
			if(r != null) {
				res_id = r.getRes_id();
				cli_id = r.getCli_id();
				voy_id = r.getVoy_id();
			}
			
			
			ServletOutputStream out = response.getOutputStream();
			ObjectMapper objectMapper = new ObjectMapper();
			
			out.write(objectMapper.writeValueAsBytes(
					con.sendGet("http://localhost:9000/api/confirmePanierClient?res_id=" + res_id + "&cli_id=" + cli_id + "&voy_id=" + voy_id)));
			out.close();
			
		}catch( Exception E) {
			
		}

	}

}