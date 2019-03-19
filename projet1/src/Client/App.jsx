import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Connection from './connection.jsx';
import Inscription from './inscription.jsx';
import AfficheVoyages from './AfficheVoyages.jsx';
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
    }

    Connection(test, etat, nom) {
        this.setState({
            MessageRetour: test,
            etatConnexion: etat,
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
            panier = <div class="nav-item mr-sm-3 form-group row"> <img class="mr-sm-2" src="./icon/panier.png"  alt="Card image cap"/><h2>0</h2> </div>


        } else {

            bouttonConnexion = <h2  onClick={this.Connection.bind(this, <Connection handler={this.Connection} />, 0)} >Connexion</h2>;
            bouttonInscription = <h2  onClick={this.Inscription.bind(this, <Inscription handler={this.Inscription} />, 0)} >Inscription</h2>;
            bonjoursUser = "";

        }

        return (
            <div className="App">
                <div className="App-header">
                    <nav class="navbar navbar-dark bg-dark justify-content-end">
                        <div class="nav-item mr-sm-3">
                            {bonjoursUser}
                        </div>

                        <div class="nav-item mr-sm-3">
                            {bouttonConnexion}
                        </div>
                        

                        <div class="nav-item mr-sm-3">
                            {bouttonInscription}
                        </div>

                        
                            {panier}
                        

                    </nav>
                </div>
                <div className="Reponse">
                    {this.state.MessageRetour}
                </div>
                <div className="ListVoyage" id="boutons">
                    <AfficheVoyages />
                </div>
            </div>
        );
    }

}

export default App;