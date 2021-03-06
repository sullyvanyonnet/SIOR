import React from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Commentaires from './commentaires.jsx';

class unVoyageComplet extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.EtatConnexion);
        this.state = {
            voyageId: props.voyageId,
            JSONVoyage : "",
            voyageId: props.voyageId,
            titre: props.titre,
            dateDebut: props.dateDebut,
            dateFin: props.dateFin,
            Text: props.Text,
            IdPhoto: "",
            Photos:"",
            Commentaires:"",
            voyages: "",
            EtatConnexion:props.EtatConnexion,
            prix:props.prix
        }

        this.ChargePhoto = this.ChargePhoto.bind(this)
        this.GetAllCommentaire = this.GetAllCommentaire.bind(this)
        this.reserve = this.reserve.bind(this)
        this.ChargePhoto();
        this.GetAllCommentaire();
    }
    ChargePhoto(){
      var data = {
            'voy_id': this.state.voyageId
        }  
         axios.post('getImagesVoyage', data)
            .then(res => {
                this.setState({
                    JSONVoyage: JSON.parse(res.data)
                })
                 this.state.Photos = this.state.JSONVoyage.map((k) =>
                            <div>
                                <img src={k.pho_chemin} />
                            </div>  
                 );
                this.forceUpdate()
            });
    }

    reserve(){
         var data = {
            'voy_id': this.state.voyageId,
            'cli_id' : this.state.EtatConnexion
        }  
        axios.post('Reservation', data)
            .then(res => {
                this.setState({
                    JSONVoyage: JSON.parse(res.data)
                })
               this.props.updateHeader();
            });
    }

    GetAllCommentaire(){
      var data = {
            'voy_id': this.state.voyageId
        }  
         axios.post('getCommentairesVoyage', data)
            .then(res => {
                this.setState({
                    JSONVoyage: JSON.parse(res.data)
                })
                 this.state.Commentaires = this.state.JSONVoyage.map((k) =>
                        <Commentaires  Nom={k.cli_login}   Text={k.com_texte}  CheminPhoto="" />
                 );
                this.forceUpdate()
            });
    }

    

    render() {
         let bouton
        if(this.state.EtatConnexion > 0){
            bouton = <button class="col-sm-3 btn btn-secondary" onClick={()=> {this.reserve()}}> réserver </button>
        }else{
            bouton = <button class="col-sm-3 btn btn-secondary" onClick={()=> {this.reserve()}} disabled> réserver </button>    
        }
       
        return (
        <div class="container col-sm-8" >





           <div class="row">
                       <Carousel>
                            {this.state.Photos}
                        </Carousel>
                                <div class="card-body">
                                    <h3 class="card-title">{this.state.titre}</h3>
                                    <p class="card-text">Du {this.state.dateDebut} au {this.state.dateFin}</p>
                                    <p class="card-text">{this.state.Text}</p>
                                    <h3 class="card-title">{this.state.prix}€</h3>
                                    {bouton}
                                    
                                </div>
            </div>
            <button class="col-sm-3 btn btn-secondary" onClick={()=> {this.props.handler()}} > retour </button>
                {this.state.Commentaires}

        </div>
            
        )
    }
}
export default unVoyageComplet;