import React, { Component } from 'react';
import './App.css';
import Connection from './connection.jsx';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            etatConnexion: 0,      
            login: "",
            var: "",
            bouttonHead: "",
            bonjoursUser:""
        }
        this.Connection = this.Connection.bind(this)
        this.Inscription = this.Inscription.bind(this)

    }

    Connection(test,etat){
        this.setState({
           var: test,
           //bonjoursUser: test,
           etatConnexion: etat
        })   

       // this.forceUpdate()
    }

    Inscription(test,etat){
        this.setState({
           var: test,
           etatConnexion: etat
        })   

       // this.forceUpdate()
    }
    
    render() {
        let bouttonConnexion ;
        if(this.state.etatConnexion){
             bouttonConnexion = <h3 onClick={this.Connection.bind(this,<p>vous etes deco</p>,0)}>Deconnexion </h3>  ;  
            this.var = "";
        }else{
             bouttonConnexion =   <h3 onClick={this.Connection.bind(this,<Connection handler = {this.Connection}/>,0)} >Connexion</h3> ;                   
        }

        let bouttonInscription ;
        if(this.state.etatConnexion){
             bouttonInscription = <h3 onClick={this.Inscription.bind(this,<p>vous etes deco</p>,0)}>Deconnexion </h3>  ;  
            this.var = "";
        }else{
             bouttonInscription =   <h3 onClick={this.Inscription.bind(this,<Connection handler = {this.Inscription}/>,0)} >Inscription</h3> ;                   
        }

        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-header-Tab">
                        <table >
                            <tr>
                                <td>
                                    {this.state.bonjoursUser}
                                </td>
                                <td>
                                    {bouttonConnexion}
                                </td>
                                <td>
                                    /
                                </td>
                                <td>
                                    {bouttonInscription}
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div className="home">
                        {this.state.var}
                </div>

            </div>
        );
    }

}

export default App;