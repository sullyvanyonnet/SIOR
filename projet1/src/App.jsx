import React, { Component } from 'react';

import Connection from './connection.jsx';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            etatConnexion: 0,      
            login: "",
            var: "",
            bouttonHead: ""
        }
        this.Connection = this.Connection.bind(this)

    }

    Connection(test,etat){
        this.setState({
           var: test,
           etatConnexion: etat
        })   

       // this.forceUpdate()
    }
    
    render() {
        let bouttonHeads ;
        if(this.state.etatConnexion){
             bouttonHeads = <h3 onClick={this.Connection.bind(this,<p>vous etes deco</p>,0)}>Deconection </h3>  ;  
            this.var = "";
        }else{
             bouttonHeads =   <h3 onClick={this.Connection.bind(this,<Connection handler = {this.Connection}/>,0)} >connection</h3> ;                   
        }
        return (
            <div className="App">
                <div className="App-header">
                    <h2>menu</h2>
                    {bouttonHeads}
                </div>
                <div className="home">
                        {this.state.var}
                </div>

            </div>
        );
    }

}

export default App;