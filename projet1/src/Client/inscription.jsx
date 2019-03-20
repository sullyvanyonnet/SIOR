import React from 'react';
import './App.css';
import axios from 'axios';
class Inscription extends React.Component {

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
        this.TestInscription = this.TestInscription.bind(this)


    }
    TestInscription(ID) {
        console.log("dans test" + ID);
        if (ID > 0) {
            this.props.handler(<h2>Inscription de {this.state.login} reussit !</h2>, 0);
        } else {
            this.setState({ Erreur: <div className="response" style={{ color: 'red' }}><h2> Probleme lors de l'Inscription.</h2></div> });
            //this.forceUpdate()
        }
    }

    enregistrer() {
        let ok = true;

        console.log(this.state.login);
        console.log(this.state.login.toString().length);
        console.log(this.state.password);

        if (!(this.state.password === this.state.verifPassword)) {
            console.log("coucou");
            this.setState({ Erreur: <div className="response" style={{ color: 'red' }}><h2> Les mots de passe sont différents.</h2></div> });
            ok = false;
        }
        if (this.state.login.toString().length < 4) {
            console.log("coucou");
            this.setState({ Erreur: <div className="response" style={{ color: 'red' }}><h2> Login trop court, longueur min : 4 charactères.</h2></div> });
            ok = false;
        }
        if (this.state.password.toString().length < 4) {
            console.log("coucou");
            this.setState({ Erreur: <div className="response" style={{ color: 'red' }}><h2> Mot de passe trop court, longueur min : 4 charactères.</h2></div> });
            ok = false;
        }

        if (ok == true) {
            var data = {
                'login': this.state.login,
                'password': this.state.password
            }

            axios.post('Inscription', data)
                .then(res => {
                    let Id = JSON.parse(res.data).affectedRows;
                    this.TestInscription(Id);
                })
        }

    }

    annuler() {
        this.props.handler("", 0)
    }

    handlechange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state);

    }

    render() {

        return (
            <div>
                <div class="container">
                    <div className="titre">
                        <h1>Inscription</h1>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-5 col-form-label"> login :</label>
                        <div class="col-sm-3">
                            <input type="text" name="login" onChange={this.handlechange} />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-5 col-form-label"> mot de passe :</label>
                        <div class="col-sm-3">
                            <input type="password" name="password" onChange={this.handlechange} />
                        </div>

                    </div>

                    <div class="form-group row">
                        <label class="col-sm-5 col-form-label"> vérifier le mot de passe :</label>
                        <div class="col-sm-3">
                            <input type="password" name="verifPassword" onChange={this.handlechange} />
                        </div>

                    </div>

                    <div class="form-group row mx-auto">
                        <div class="col-sm-5">
                            <button class="col-sm-3 btn btn-secondary" onClick={this.annuler}> annuler</button>
                        </div>
                        <div class="col-sm-5">
                            <button class="col-sm-3 btn btn-secondary" onClick={this.enregistrer}>
                                connexion
                        </button>

                        </div>
                    </div>
                    {this.state.Erreur}
                </div>

            </div>






        );
    }
}

export default Inscription;