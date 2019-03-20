import React from 'react';
import './App.css';
import axios from 'axios';

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
            'voy_id': this.state.idMax
        }
        axios.post('getAllVoyages', data)
            .then(res => {
                this.setState({
                    JSONVoyages: JSON.parse(res.data)
                })

                this.state.tableVoyages = this.state.JSONVoyages.map((k) =>
                    <UnVoyage handler={this.afficheUneDestination} voyageId={k.voy_id} titre={k.voy_nom} dateDebut={k.voy_debut} dateFin={k.voy_fin} Text={k.voy_description} IdPhoto={k.pho_id} CheminPhoto={k.pho_chemin} prix={k.voy_prix}/>
                );
                this.forceUpdate()

            });




    }

    render() {

        return (
            <div class="row display-flex">
            <h1>Voici votre panier : </h1>
                <div class="card-group">
                    {this.state.tableVoyages}
                </div>
            </div>
        );
    }
}

export default Panier;




























