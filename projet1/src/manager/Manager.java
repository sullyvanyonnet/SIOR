package manager;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class Manager {

	boolean identifie = false;
	String ident = "";
	
	public static Manager init(HttpServletRequest request) {
		// la première servlet qui exécute "init"
		// va créer l'objet manager
		// ensuite l'objet manager est réutilisé
		Manager manager = null;
		
		HttpSession session = request.getSession();
		manager = (Manager)session.getAttribute("manager");
		if (manager == null) {
			manager = new Manager();
			session.setAttribute("manager", manager);
		}
		
		return manager;
	}
	
	public boolean isIdentifie() {
		return identifie;
	}
	public void setIdentifie(boolean identifie) {
		this.identifie = identifie;
	}
	public String getIdent() {
		return ident;
	}
	public void setIdent(String ident) {
		this.ident = ident;
	}
	
	
}