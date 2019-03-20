package manager;

public class User {

	private Integer cli_id;
	private String login;
	private String password;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public Integer getCli_id() {
		return cli_id;
	}

	public void setCli_id(Integer cli_id) {
		this.cli_id = cli_id;
	}
}
