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
            voyages: "",
            prix:props.prix
        }
        this.handlechange = this.handlechange.bind(this)

    }

    handlechange(event) {
        this.props.handler(this.state.voyageId);
    }



    render() {
        return (
            <div class="col-md-4 col-6" onClick={() => {this.handlechange()}}>
                <div class="card h-100">
                    <img class="card-img-top img-thumbnail img-fluid" src={this.state.CheminPhoto} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">{this.state.titre}</h3>
                        <p class="card-text">Du {this.state.dateDebut} au {this.state.dateFin}</p>
                        <p class="card-text">{this.state.Text}</p>
                        <h3 class="card-title">{this.state.prix} € </h3>

                    </div>
                </div>
            </div>
        )
    }
}
export default unVoyage;