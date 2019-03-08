import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home.jsx';
import Livre from './Livre.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Menu</h2>
                </div>
                <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                    <div>
                        <ul className="nav">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/livres">Gestion des livres</Link></li>
                        </ul>
                        <Switch>
                            <Route path="/livres" component={Livre} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;