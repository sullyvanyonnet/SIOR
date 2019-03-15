import React from 'react';
import './App.css';
import axios from 'axios';
import unVoyage from './unVoyage';
let ReactBsTable = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
class AfficheVoyage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            login: "",
            Erreur: "",
            idMax: 0,
            tableVoyages: new Array(),
            JSONVoyages: ""
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
            'idMax': this.state.idMax
        }
        axios.post('getAllVoyages', data)
            .then(res => {
                this.state.JSONVoyages = JSON.parse(res.data);
                //console.log(this.state.JSONVoyages);

                /*Object.keys(this.state.JSONVoyages).forEach(function (k) {
                    this.state.tableVoyages.push(<unVoyage
                        voyageId={k["voy_id"]}
                        titre={k["voy_nom"]}
                        dateDebut={k["voy_debut"]}
                        dateFin={k["voy_fin"]}
                        Text={k["voy_description"]}
                        IdPhoto={k["pho_id"]}
                        CheminPhoto={k["pho_chemin"]} />)
                });*/

                this.state.JSONVoyages.forEach(function (k) {

                    console.log(k);

                    console.log(k.voy_id);
                    let nomvar = "tableVoyage" + k.voy_id;
                    console.log(nomvar);

                    this.setState(
                        {
                            //tableVoyages:[1]
                            //tableVoyages: [...this.state.tableVoyages, <p> {k.voy_id} </p>]
                        })
                    /*
                this.setState(
                    {
                        [nomvar]: <unVoyage
                            voyageId={k.voy_id}
                            titre={k.voy_nom}
                            dateDebut={k.voy_debut}
                            dateFin={k.voy_fin}
                            Text={k.voy_description}
                            IdPhoto={k.pho_id}
                            CheminPhoto={k.pho_chemin} />

                    })*/
                });

                //this.forceUpdate();
            })
    }



    render() {
        return (
            <div id="voyages" name="voyages">
            </div>


        );
    }
}

export default AfficheVoyage;




























