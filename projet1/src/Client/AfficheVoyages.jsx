import React from 'react';
import './App.css';
import axios from 'axios';
import UnVoyage from './unVoyage.jsx';
import UnVoyageComplet from './unVoyageComplet.jsx';

class AfficheVoyage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            login: "",
            Erreur: "",
            idMax: 0,
            tableVoyages: "",
            JSONVoyages: []
        }


        this.getAllVoyages = this.getAllVoyages.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.afficheUneDestination = this.afficheUneDestination.bind(this)
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

        //let number = [{"voy_id":1,"voy_nom":"Croisière dans le secteur de Koprulu","voy_debut":"2012-03-18T23:00:00.000Z","voy_fin":"2019-03-18T23:00:00.000Z","pho_id":1,"pho_chemin":"./images/korhal-starcraft_987563239.jpg"},{"voy_id":2,"voy_nom":"Randonnée en westeros","voy_debut":"2021-03-18T23:00:00.000Z","voy_fin":"2030-03-18T23:00:00.000Z","pho_id":3,"pho_chemin":"./images/7d5d9f0055fbf4f6c0f609e87e211463.jpg"}]



    }

    afficheUneDestination(id) {

        this.state.JSONVoyages.map((k) =>
            id == k.voy_id ?
                this.state.tableVoyages = <UnVoyageComplet handler={this.getAllVoyages} voyageId={k.voy_id} titre={k.voy_nom} dateDebut={k.voy_debut} dateFin={k.voy_fin} Text={k.voy_description} IdPhoto={k.pho_id} CheminPhoto={k.pho_chemin} prix={k.voy_prix}/>
                :
                null

        );
        //this.state.tableVoyages = <UnVoyageComplet  voyageId="0" titre="toto" dateDebut="20/02/02"dateFin="20/02/02" Text="blabla" IdPhoto="0" CheminPhoto="./images/korhal-starcraft_987563239.jpg" />          

        this.forceUpdate()

    }

    render() {

        return (
            <div class="row display-flex">
                <div class="card-group">
                    {this.state.tableVoyages}
                </div>
            </div>
        );
    }
}

export default AfficheVoyage;




























