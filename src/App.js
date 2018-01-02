import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './containers/home';
import Menu from './containers/menu';
import About from './containers/about';
import Header from './components/header';
import './style/App.css';

class App extends Component {
    render() {
        return ([
                <Header key={'header'} />,
                <div key={'body'} className='body'>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/menu' component={Menu}/>
                </div>
        ]);
    }
}

export default App;
