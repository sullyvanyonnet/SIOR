import React from 'react';

class connection extends React.Component {

    constructor(props) {
        super(props);
        this.enregistrer = this.enregistrer.bind(this)

    }
  enregistrer(){

  }  
  render() {



    return (
      <div className="home">
        <table>
            <tr>
                <td> 
                    <h1>connection :</h1>
                </td>
            </tr>
                    <tr>
                        <td>login :</td>
                        <td><input type="text" name="login" value=""/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>mot de passe :</td>
                        <td><input type="text" name="password" value=""/></td>
                        <td></td>
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

export default connection;