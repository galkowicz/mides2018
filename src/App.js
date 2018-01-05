import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";
import {Container} from 'semantic-ui-react';
import Home from './containers/home';
import Menu from './containers/menu';
import About from './containers/about';
import Header from './components/header';
import './style/App.css';
import {getActiveLanguage, getLanguages, getTranslate} from "react-localize-redux/lib/index";

class App extends Component {
    render() {
        return (<div className={this.props.currentLanguage}>
            <Header key={'header'}/>

            <Container className='body'>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/menu' component={Menu}/>
            </Container>
        </div>);
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
    languages: getLanguages(state.locale),
    routing: state.routing
});

export default connect(mapStateToProps)(App);
