import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class unVoyage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            voyageId: props.voyageId,
            titre: props.titre,
            dateDebut: props.dateDebut,
            dateFin: props.dateFin,
            Text: props.Text,
            IdPhoto: "",
            CheminPhoto: props.CheminPhoto,
            voyages: ""
        }

        this.handlechange = this.handlechange.bind(this)

    }

    handlechange(event) {
    }

    render() {
        return (
            <div class="aa">
                <div class="card mb-3">
                <img class="card-img-top" src={this.state.CheminPhoto} width={300} height={300} alt="Card image cap"/>
                <div class="card-body">
                    <h3 class="card-title">{this.state.titre}</h3>
                    <p class="card-text">Du :{this.state.dateDebut} au {this.state.dateFin}</p>
                    <p class="card-text">{this.state.Text}</p>
                </div>
                </div>
           </div> 
            )
        }
    }
export default unVoyage;