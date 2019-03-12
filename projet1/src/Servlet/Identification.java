package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		request.setAttribute("contenu", "/WEB-INF/identification.jsp");
		request.getServletContext().getRequestDispatcher(
				"/WEB-INF/modele/modele.jsp").
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

		String ident = request.getParameter("ident");
		if (ident == null) ident = "";
		

		if (ident.equals("ubo")) {
			// succès identification
			manager.setIdentifie(true);
			manager.setIdent(ident);
			
			request.getSession().setAttribute
				("mess", "Succcès identification");
			response.sendRedirect("Accueil");
			return;
		}
		else {
			manager.setIdentifie(false);
			manager.setIdent(ident);
			doGet(request,response);
		}
	
	}

}