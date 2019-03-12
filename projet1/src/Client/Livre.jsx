import React from 'react';
import axios from 'axios';

class Livre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            livre: {},      // livre à enregistrer
            items: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.enregistrer = this.enregistrer.bind(this)
    }

 
    handleChange(event) {
        // console.log("handleChange "+event.target.name+" "+event.target.value)
        // this.setState({
        //     ...this.state.livre,[event.target.name]: event.target.value
        // })

        // immutable data
        this.setState({
            livre: {
                ...this.state.livre,
                [event.target.name]: event.target.value
            }
        });

        var util = require('util');
	    console.log(util.inspect("livre = "+util.inspect( this.state.livre)));

    }

    enregistrer() {

        console.log('enregistrer ' + JSON.stringify(this.state));
        var tab = this.state.items;
        tab.push(this.state.livre)
        this.setState({
            livre: { titre: '', auteur: '', annee: '' },
            items: tab
        })

        axios.post('ServletEnregistrer', this.state.livre)
            .then(res => {
                console.log(JSON.stringify(res.data));
            })
    }

    render() {
        var data = this.state.items;
        var buttonStyle = {
            margin: '0',
            width: '150px',
            height: '30px'
        };

        return (
 
            <div className="home">
                <h1> Enregistrement d'un livre</h1>
                <table>
                    <tr>
                        <td>Titre :</td>
                        <td><input type="text" name="titre" value={this.state.livre.titre}
                            onChange={e => this.handleChange(e)} /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Auteur :</td>
                        <td><input type="text" name="auteur" value={this.state.livre.auteur}
                            onChange={e => this.handleChange(e)}
                             /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Année :</td>
                        <td><input type="text" name="annee" value={this.state.livre.annee}
                            onChange={e => this.handleChange(e)}
                            /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td><button
                            className="btn btn-default"
                            style={buttonStyle}
                            onClick={this.enregistrer}
                        >Enregistrer</button></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>              <button
                            className="btn btn-default"
                            style={buttonStyle}
                            onClick=""
                        >Reset</button>
                        </td>
                    </tr>
                </table>
                <h1>Liste des livres enregistrés</h1>
                <ul>
                    {data.map(function (d, idx) {
                        return (<li key={idx}>titre : {d.titre} , auteur : {d.auteur} , année : {d.annee}</li>)
                    })}
                </ul>
            </div>
        );
    }
}






export default Livre;