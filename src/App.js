import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import ReactDOMServer from 'react-dom/server';
import { Container } from 'semantic-ui-react';
import Home from './containers/home';
import Menu from './containers/menu';
import About from './containers/about';
import Header from './components/header';
import './style/App.css';
import { getActiveLanguage, getLanguages, getTranslate } from "react-localize-redux/lib/index";
import { withLocalize } from 'react-localize-redux';
import translations from './translations/index';

class App extends Component {
		constructor(props) {
				super(props);

				this.props.initialize({
						languages: [
								{ name: 'עברית', code: 'he' },
								{ name: 'English', code: 'en' }
						],
						translations,
						options: {
								renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup
						}
				});

				this.props.addTranslation(translations);
		}

		render() {
				// TODO make this style work
				const style = { marginLeft: '0!important', marginRight: '0' };
				const { translate, currentLanguage } = this.props;

				return (<div className={currentLanguage}>
						<Header key={'header'}/>

						<Container className='body' style={style}>
								<Switch>
										<Route exact path='/' component={Home}/>
										<Route path='/about' component={About}/>
										<Route path={`/menu`}
										       render={() => (<Menu translate={translate}/>)}
										/>
								</Switch>
						</Container>
				</div>);
		}
}

const mapStateToProps = state => ({
		translate: getTranslate(state.localize),
		currentLanguage: getActiveLanguage(state.localize),
		languages: getLanguages(state.localize),
		router: state.router
});

export default connect(mapStateToProps)(withLocalize(App));
