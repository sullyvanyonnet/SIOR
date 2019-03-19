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
            Photos: props.Photos,
            voyages: ""
        }

        this.handlechange = this.handlechange.bind(this)

    }

    handlechange(event) {
    }

    render() {
        return (
            <div class="container col-sm-8" >
                <div class="row">
                    <div class="col-sm">
                        <div class="card mb-3 ">
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                            <img class="card-img-top img-thumbnail img-fluid" src={this.state.CheminPhoto} alt="Card image cap" />
                            <div class="card-body">
                                <h3 class="card-title">{this.state.titre}</h3>
                                <p class="card-text">Du {this.state.dateDebut} au {this.state.dateFin}</p>
                                <p class="card-text">{this.state.Text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default unVoyage;