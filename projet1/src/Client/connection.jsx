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
           this.props.handler(<h2>bonjour {this.state.login}</h2>,1, this.state.login) ;
        }else{
            this.setState({Erreur:<div className="response" style={{color: 'red'}}><h2> Les identifiants sont incorrects .</h2></div>});
            //this.forceUpdate()
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

            
                <div class="container">
                <div className="titre">
                    <h1>Connexion</h1>             
                </div>
                <div class="form-group row">
                    <label  class="col-sm-5 col-form-label"> login :</label>
                    <div class="col-sm-3">
                        <input class="form-control" type="text" name="login" onChange={this.handlechange}/>
                    </div>
                </div>
                
            
                <div class="form-group row">
                    <label  class="col-sm-5 col-form-label">mot de passe :</label>
                    <div class="col-sm-3">
                        <input class="form-control" type="password" name="password" onChange={this.handlechange}/>
                    </div>
                </div>
                <div class="form-group row mx-auto">
                    <div class="col-sm-5">
                        <button class="col-sm-3 btn btn-secondary" onClick={this.annuler}>
                            annuler
                        </button>  
                    </div>
                    <div class="col-sm-5">
                        <button class="col-sm-3 btn btn-secondary" onClick={this.enregistrer}>
                            connexion
                        </button>
                    </div>  
                </div>

            
            </div>
            {this.state.Erreur}
        </div>



    );
  }
}

export default Connection;