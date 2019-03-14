import React from 'react';
import './App.css';
import axios from 'axios';
class Connection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",      
            login: "",
            Erreur: ""
        }
        this.enregistrer = this.enregistrer.bind(this)
        this.annuler = this.annuler.bind(this)

        this.handlechange = this.handlechange.bind(this)
        this.TestConnexion = this.TestConnexion.bind(this)


    }
    TestConnexion(ID){
        console.log("dans test"+ID); 
        if ( ID > 0){
           this.props.handler(<h2>bonjour {this.state.login}</h2>,1) ;
        }else{
            this.setState({Erreur:<div className="response" style={{color: 'red'}}><h2> Les identifiants sont incorrects .</h2></div>});
        }
    }
  enregistrer(){

         var data = {
        'login': this.state.login,
        'password': this.state.password
        }


        axios.post('Identification', data )
            .then(res => {
                let Id = JSON.parse(res.data).greeting;
                this.TestConnexion(Id );
            })
  }

    annuler(){
        this.props.handler("",0)
  }

  handlechange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]:value
    });
            console.log(this.state); 

  } 

  render() {

    return (
        <div>
            <div className="titre">
                <h1>Connection</h1>             
            </div>
            <table>
                

                <tr>
                    <td>login :</td>
                        <td><input type="text" name="login" onChange={this.handlechange}/></td>
                </tr>
                <tr>
                    <td>mot de passe :</td>
                    <td><input type="password" name="password" onChange={this.handlechange}/></td>
                </tr>
                <tr>
                    <td>
                        <button className="btn btn-default" onClick={this.annuler}>
                            annuler
                        </button>
                    </td>
                    
                    <td>
                        <button className="btn btn-default" onClick={this.enregistrer}>
                            connexion
                        </button>
                    </td> 
                </tr>

                <tr>
                    {this.Erreur}
                </tr>
            </table>
        </div>



    );
  }
}

export default Connection;