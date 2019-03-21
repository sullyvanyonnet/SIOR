Projet de Corentin GRALL et Sullyvan YONNET

Les technologies utilisées:
	- React
	- MongoDB
	- Tomcat
	- JDBC
	- MariaDB
	- React Bootstrap
	- JSON
	
	
Outils à installer:
	- npm install react-responsive-carousel --save
	- npm install --save bootstrap
	- npm install mariadb
	- npm install mongodb
	
Outils a importer
	- mariadb-java-client-2.4.1-sources.jar
	- mysql-connector-java-8.0.13.jar
	- mysql-connector-java_8.0.15-1ubuntu18.04_all.deb
	- jackson-databind-2.8.2.jar
	- jackson-core-2.8.2.jar
	- jackson-annotations-2.8.0.jar
	
	
Les fonctionnalitées :

	Sans être connecté
		- Possibilité de connexion.
		- Possibilité de s'inscrire.
		- Contrôle de qualité des informations saisies lors de l'inscription et affichage du message d'erreur adapté.
		- Affichage des voyages, avec comme informations une image, un titre, une date de début et de fin, une description, un prix. 
		- Affichage d'un voyage précis avec un boutton réserver grisé. Les informations affichées sont les mêmes que précédemment avec en plus plusieurs photos au lieu d'une.
		- Affichage des commentaires liés à un voyage sans être connecté. Les informations sont le nom de l'utilisateur qui a commenté et son commentaire
	
	En étant connecté
		- Affichage du nombre d'éléments dans le panier à coté de l'icone panier.
		- Possibilité de retourner à l'accueil avec le mot "ACCUEIL" dans le header.
		- Possibilité de se déconnecter.
		- Possibilité de reserver un voyage grâce au bouton "réserver" qui n'est plus grisé dans la page d'un voyage.
		- Possibilité d'afficher son panier avec l'icone du panier dans le header.
		- Possibilité de regler le panier dans la page du panier.
		

Liens entre les composants de l'application :

	- De React à Tomcat
	- De Tomcat à node.js
	- De Tomcat à MariaDB
	- de node.js à MariaDB
	- de node.js à MongoDB
		   	