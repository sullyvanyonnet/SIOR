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
				bouttonConnexion = <h3 onClick={this.Connection.bind(this,<p>vous etes deco</p>,0)}>Deconnexion </h3>;
				bouttonInscription = "";	
				bonjoursUser = <h3>Bonjour, {this.state.login} </h3>;
			
		}else{
			
                bouttonConnexion = <h3 onClick={this.Connection.bind(this,<Connection handler = {this.Connection}/>,0)} >Connexion</h3>;
                bouttonInscription =   <h3 onClick={this.Inscription.bind(this,<Inscription handler = {this.Inscription}/>,0)} >Inscription</h3>;
                bonjoursUser =""; 
		    
		}

        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-header-Tab">
                        <table >
                            <tr>
                                <td>
                                    {bonjoursUser}
                                </td>
                                <td>
                                    {bouttonConnexion}
                                </td>

                                <td>
                                    {bouttonInscription}
                                </td>
                            </tr>

                        </table>
                    </div>
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