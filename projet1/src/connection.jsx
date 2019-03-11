import React from 'react';

class Connection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",      
            login: ""
        }
        this.enregistrer = this.enregistrer.bind(this)
        this.handlechange = this.handlechange.bind(this)


    }
  enregistrer(){
        console.log(this.state); 
        console.log('enregistrer ' + JSON.stringify(this.state));
        this.props.handler(<h2>bonjour {this.state.login} et ton mdp est {this.state.password}</h2>,1)
        /*axios.post('ServletConnection', this.state.login , this.state.password)
            .then(res => {
                console.log(JSON.stringify(res.data));
            })*/
  }
  handlechange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]:value
    });
            console.log(this.state); 

  } 

  render() {

    return (
      <div className="home">
        <table>
            <tr>
                <td> 
                    <h1>Connection</h1>
                </td>
            </tr>
            <tr>
                <td>login :</td>
                    <td><input type="text" name="login" onChange={this.handlechange}/></td>
                    <td></td>
                </tr>
            <tr>
                <td>mot de passe :</td>
                <td><input type="text" name="password" onChange={this.handlechange}/></td>
            </tr>
            <tr>
               <td>
                <button className="btn btn-default" onClick={this.enregistrer}>
                    connection
                 </button>
                </td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Connection;