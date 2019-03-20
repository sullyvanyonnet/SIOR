import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Connection from './connection.jsx';
import Inscription from './inscription.jsx';
import AfficheVoyages from './AfficheVoyages.jsx';
import Panier from './Panier.jsx';

let ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            etatConnexion: 0,
            login: "",
            MessageRetour: "",
            bouttonHead: "",
            voyage: ""
        }
        this.Connection = this.Connection.bind(this)
        this.Inscription = this.Inscription.bind(this)
        this.AfficheVoyages = this.AfficheVoyages.bind(this)
        this.Affichepanier = this.Affichepanier.bind(this)


    }


    AfficheVoyages(){
        this.setState({
            Main : <AfficheVoyages EtatConnexion= {this.state.etatConnexion}/>
        })
    }

    Affichepanier(){
        this.setState({
            Main : <Panier EtatConnexion= {this.state.etatConnexion}/>
        })
    }

    Connection(test, etat, nom) {
        this.setState({
            MessageRetour: test,
            etatConnexion: etat, //0 si pas connecter sinon id utilisateur
            login: nom
        })
        // this.forceUpdate()
    }

    Inscription(test, etat) {
        this.setState({
            MessageRetour: test,
            etatConnexion: etat
        })
    }


    render() {
        let bouttonConnexion;
        let bouttonInscription;
        let bonjoursUser;
        let panier;

        if (this.state.etatConnexion) {
            bouttonConnexion = <h2   onClick={this.Connection.bind(this, <p>vous etes deco</p>, 0)}>Deconnexion </h2 >;
            bouttonInscription = "";
            bonjoursUser = <h2 >Bonjour, {this.state.login} </h2 >;
            panier = <div class="nav-item mr-sm-3 form-group row"> <img class="mr-sm-2" src="./icon/panier.png"  alt="Card image cap" onClick={() => {this.Affichepanier()}}/><h2>0</h2> </div>


        } else {

            bouttonConnexion = <h2  onClick={this.Connection.bind(this, <Connection handler={this.Connection} />, 0)} >Connexion</h2>;
            bouttonInscription = <h2  onClick={this.Inscription.bind(this, <Inscription handler={this.Inscription} />, 0)} >Inscription</h2>;
            bonjoursUser = "";

        }

        return (
            <div className="App">
                <div className="App-header">
                    <nav class="navbar navbar-dark bg-dark">
                    <div class="nav-item mr-sm-3">
                        <h2 onClick={() => {this.AfficheVoyages()}}>accueil</h2>
                    </div>
                     <div class="justify-content-end">
                        <div class="nav-item mr-sm-3">
                            {bonjoursUser}
                        </div>

                        <div class="nav-item mr-sm-3">
                            {bouttonConnexion}
                        </div>
                        

                        <div class="nav-item mr-sm-3">
                            {bouttonInscription}
                        </div>
                    </div>

                        
                            {panier}
                        

                    </nav>
                </div>
                <div className="Reponse">
                    {this.state.MessageRetour}
                </div>
                <div className="ListVoyage" id="boutons">
                    <AfficheVoyages EtatConnexion= {this.state.etatConnexion}/>
                </div>
            </div>
        );
    }

}

export default App;