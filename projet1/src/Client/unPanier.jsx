import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class UnPanier extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation:props.reservation,
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
        this.supprimer=this.supprimer.bind(this)
    }

    supprimer(){
        var data = {
            'res_id': this.state.reservation,
        }

        axios.post('removeReservation', data)
            .then(res => {
                this.setState({
                    JSONVoyages: JSON.parse(res.data)
                })
                this.props.handler();
            });
    }
    handlechange(event) {
        this.props.handler(this.state.voyageId);
    }



    render() {
        return (
            <div class="col-md-4 col-6">
                <div class="card h-100">
                    <img class="card-img-top img-thumbnail img-fluid" src={this.state.CheminPhoto} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">{this.state.titre}</h3>
                        <p class="card-text">Du {this.state.dateDebut} au {this.state.dateFin}</p>
                        <p class="card-text">{this.state.Text}</p>
                        <h3 class="card-title">{this.state.prix} € </h3>
                        <button class="col-sm-3 btn btn-secondary" onClick={()=> {this.supprimer()}}> supprimer </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default UnPanier;