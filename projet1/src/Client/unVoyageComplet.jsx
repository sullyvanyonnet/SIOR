import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class unVoyageComplet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            voyageId: props.voyageId,
            JSONVoyage : "",
            voyageId: props.voyageId,
            titre: props.titre,
            dateDebut: props.dateDebut,
            dateFin: props.dateFin,
            Text: props.Text,
            IdPhoto: "",
            CheminPhoto: props.CheminPhoto,
            voyages: ""
        }

        this.ChargePhoto = this.ChargePhoto.bind(this)
        this.reserve = this.reserve.bind(this)

        
    }
    ChargePhoto(){
      var data = {
            'ID': this.state.voyageId
        }  
         axios.post('', data)
            .then(res => {
                this.setState({
                    JSONVoyage: JSON.parse(res.data)
                })
                
            });
    }

    reserve(){
         var data = {
            'ID': this.state.voyageId
        }  
        axios.post('', data)
            .then(res => {
                this.setState({
                    JSONVoyage: JSON.parse(res.data)
                })
                
            });
    }



    

    render() {
        return (
        <div class="container col-sm-8" >





           <div class="row">
                       <Carousel>
                            <div>
                                <img src={this.state.CheminPhoto} />
                            </div>
                            <div>
                                <img src={this.state.CheminPhoto}/>
                            </div>
                            <div>
                                <img src={this.state.CheminPhoto}/>
                            </div>
                        </Carousel>
                                <div class="card-body">
                                    <h3 class="card-title">{this.state.titre}</h3>
                                    <p class="card-text">Du {this.state.dateDebut} au {this.state.dateFin}</p>
                                    <p class="card-text">{this.state.Text}</p>
                                    <button class="col-sm-3 btn btn-secondary"> réservé </button>
                                </div>
                    </div>
                <button class="col-sm-3 btn btn-secondary" onClick={()=> {this.props.handler()}} > retour </button>
                </div>
            
        )
    }
}
export default unVoyageComplet;