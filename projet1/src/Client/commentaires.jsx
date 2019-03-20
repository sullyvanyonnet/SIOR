import React from 'react';
import './commentaire.css';
import axios from 'axios';

class Commentaires extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Nom: props.Nom,
            Text: props.Text,
            CheminPhoto: props.CheminPhoto

        }
        this.handlechange = this.handlechange.bind(this)

    }

    handlechange(event) { 
    }

    render() {

        return (
            <div class="card flex-row flex-wrap">
                <div class="card-header border-0">
                        <img src="//placehold.it/50" alt="" />

                </div>
                <div class="card-header ">
                        <h4 class="card-title">{this.state.Nom}</h4>
                    
                </div>    
               <div class="card-footer w-100 ">
                 <div class="border-0" id="texte" >
                     {this.state.Text}
                  </div>   
                </div>           
            </div>
           
        );
    }
}

export default Commentaires;




























