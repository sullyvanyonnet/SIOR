import React from 'react';
import './App.css';
import axios from 'axios';
import UnVoyage from './unVoyage.jsx';
class AfficheVoyage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            login: "",
            Erreur: "",
            idMax: 0,
            tableVoyages: "",
            JSONVoyages:[]
        }


        this.getAllVoyages = this.getAllVoyages.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.creeUnVoyage = this.creeUnVoyage.bind(this)
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

        /*
        var data = {
            'idMax': this.state.idMax
        }
        axios.post('getAllVoyages', data)
            .then(res => {
                this.setState({
                    JSONVoyages: JSON.parse(res.data)
                })

                this.state.JSONVoyages.forEach(function (k) {
                    console.log("je suis dans le foreach");
                    //this.creeUnVoyage(k.voy_id, k.voy_nom , k.voy_debut , k.voy, k.voy_fin, k.pho_id, k.pho_chemin);
                });

                console.log(this.state.tableVoyages);

            });*/

            let number = [{"voy_id":1,"voy_nom":"Croisière dans le secteur de Koprulu","voy_debut":"2012-03-18T23:00:00.000Z","voy_fin":"2019-03-18T23:00:00.000Z","pho_id":1,"pho_chemin":"./images/korhal-starcraft_987563239.jpg"},{"voy_id":2,"voy_nom":"Randonnée en westeros","voy_debut":"2021-03-18T23:00:00.000Z","voy_fin":"2030-03-18T23:00:00.000Z","pho_id":3,"pho_chemin":"./images/7d5d9f0055fbf4f6c0f609e87e211463.jpg"}]

             this.state.tableVoyages = number.map((k) =>
                <UnVoyage voyageId={k.voy_id} titre={k.voy_nom} dateDebut={k.voy_debut} dateFin={k.voy_fin} Text={k.voy_description} IdPhoto={k.pho_id} CheminPhoto={k.pho_chemin} />          
            );
            this.forceUpdate()

    }

    creeUnVoyage(voyageId, titre, dateDebut, dateFin, Text, IdPhoto, CheminPhoto) {
        console.log("je suis dans la fonction");
        //return (<p>coucou</p>); 
        //return <unVoyage voyageId={voyageId} titre={titre} dateDebut={dateDebut} dateFin={dateFin} Text={Text} IdPhoto={IdPhoto} CheminPhoto={CheminPhoto}/>
    }

    render() {

        return (
            <div>
                {this.state.tableVoyages}
            </div>
        );
    }
}

export default AfficheVoyage;




























