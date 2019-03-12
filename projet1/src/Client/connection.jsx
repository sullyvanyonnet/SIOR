import React from 'react';
import './App.css';

class Connection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",      
            login: ""
        }
        this.enregistrer = this.enregistrer.bind(this)
        this.annuler = this.annuler.bind(this)

        this.handlechange = this.handlechange.bind(this)


    }
  enregistrer(){

        this.props.handler(<h2>bonjour {this.state.login} et ton mdp est {this.state.password}</h2>,1)
        /*axios.post('ServletConnection', this.state.login , this.state.password)
            .then(res => {
                console.log(JSON.stringify(res.data));
            })*/
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

                </tr>

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
            </table>
        </div>



    );
  }
}

export default Connection;