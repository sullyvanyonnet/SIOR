import React from 'react';
import './App.css';
import axios from 'axios';
import UnPanier from './unPanier.jsx';

class Panier extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            login: "",
            Erreur: "",
            tableVoyages: "",
            EtatConnexion:props.EtatConnexion,
            JSONVoyages: []
        }


        this.getAllVoyages = this.getAllVoyages.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.regler =  this.regler.bind(this)
        this.getAllVoyages();

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

    getAllVoyages() {
        var data = {
            'cli_id': this.state.EtatConnexion
        }
        axios.post('getPanierClient', data)
            .then(res => {
                this.setState({
                    JSONVoyages: JSON.parse(res.data)
                })

                this.state.tableVoyages = this.state.JSONVoyages.map((k) =>
                    <UnPanier handler={this.getAllVoyages} EtatConnexion={this.state.EtatConnexion} reservation={k.res_id} voyageId={k.voy_id} titre={k.voy_nom} dateDebut={k.voy_debut} dateFin={k.voy_fin} Text={k.voy_description} IdPhoto={k.pho_id} CheminPhoto={k.pho_chemin} prix={k.voy_prix}/>
                );
                this.props.updateHeader();
                this.forceUpdate()

            });
    }
    regler() {
        let data 
       this.state.JSONVoyages.map((k) =>{

        data = {
            'cli_id': this.state.EtatConnexion,
            'res_id': k.res_id,
            'voy_id': k.voy_id
        }
        axios.post('confirmePanierClient', data)
    }).then(
           this.getAllVoyages()
       );
    }


    render() {

        return (
            <div class="row display-flex">
            <h1>  Voici votre panier : </h1>
                <div class="card-group">
                    {this.state.tableVoyages}
                </div>
                <button class="col-sm-3 btn btn-secondary" onClick={()=> {this.regler()}}> regler </button>

            </div>
        );
    }
}

export default Panier;




























