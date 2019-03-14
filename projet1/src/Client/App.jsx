import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Connection from './connection.jsx';
import Inscription from './inscription.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            etatConnexion: 0,      
            login: "",
            MessageRetour: "",
            bouttonHead: "",
            voyage:""
        }
        this.Connection = this.Connection.bind(this)
        this.Inscription = this.Inscription.bind(this)

    }

    Connection(test,etat,nom){
        this.setState({
           MessageRetour: test,
           etatConnexion: etat,
           login: nom
        })   
       // this.forceUpdate()
    }

    Inscription(test,etat){
        this.setState({
           MessageRetour: test,
           etatConnexion: etat
        })   
    }
    
    render() {
        let bouttonConnexion;
        let bouttonInscription;
        let bonjoursUser;

		if(this.state.etatConnexion){
				bouttonConnexion = <a class="nav-item" onClick={this.Connection.bind(this,<p>vous etes deco</p>,0)}>Deconnexion </a>;
				bouttonInscription = "";	
				bonjoursUser = <a class="nav-item">Bonjour, {this.state.login} </a>;
			
		}else{
			
                bouttonConnexion = <a class="nav-item" onClick={this.Connection.bind(this,<Connection handler = {this.Connection}/>,0)} >Connexion</a>;
                bouttonInscription =   <a class="nav-item" onClick={this.Inscription.bind(this,<Inscription handler = {this.Inscription}/>,0)} >Inscription</a>;
                bonjoursUser =""; 
		    
		}

        return (
            <div className="App">
                <div className="App-header">
                    <nav class="navbar navbar-dark bg-dark">
                        
                        
                            {bonjoursUser}
                        
                        
                            {bouttonConnexion}
                        
                       
                            {bouttonInscription}
                        
                       
                    </nav>
                </div>        
                <div className="Reponse">
                        {this.state.MessageRetour}
                </div>
                <div className="ListVoyage">
                        {this.state.voyage}
                </div>
            </div>
        );
    }

}

export default App;