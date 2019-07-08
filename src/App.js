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
import { getLanguages, getTranslate } from "react-localize-redux/lib/index";
import { withLocalize } from 'react-localize-redux';
import translations, { getFirebaseContent } from './translations/index';
import { parseMenuContent } from './utils/contentParser';
import { bindActionCreators } from 'redux';
import { setTranslation } from "./reducers/translationsReducer";
import {
		STARTERS_F00D,
		BRAZILIAN_FOOD,
		MAIN_FOOD,
		FISH_PASTA_FOOD,
		DESSERTS_FOOD,
		COLD_DRINKS,
		HOT_DRINKS,
		BEERS_DRINKS, BRAZILIAN_DRINKS
} from './constants';

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

		}

		componentDidMount() {
				getFirebaseContent('menuStarters')
					.then((content) => {
							const starters = parseMenuContent(content[STARTERS_F00D]);
							const brazilian = parseMenuContent(content[BRAZILIAN_FOOD]);
							const main = parseMenuContent(content[MAIN_FOOD]);
							const fish = parseMenuContent(content[FISH_PASTA_FOOD]);
							const desserts = parseMenuContent(content[DESSERTS_FOOD]);
							const coldDrinks = parseMenuContent(content[COLD_DRINKS]);
							const brazilianDrinks = parseMenuContent(content[BRAZILIAN_DRINKS]);
							const beers = parseMenuContent(content[BEERS_DRINKS]);
							const hotDrinks = parseMenuContent(content[HOT_DRINKS]);

							const parsedTranslations = {
									starters,
									brazilian,
									main,
									fish,
									desserts,
									coldDrinks,
									hotDrinks,
									brazilianDrinks,
									beers
							};
							Object.assign(translations, parsedTranslations);
							this.props.setTranslation(parsedTranslations);
							this.props.addTranslation(translations);
					}).catch((error) => {
						console.error(error);
				});
		}

		render() {
				const { translate } = this.props;

				return (<React.Fragment>
						<Header key={'header'}/>

						<Container className='body'>
								<Switch>
										<Route exact path='/' component={Home}/>
										<Route path='/about' component={About}/>
										<Route path={`/menu`}
										       render={() => (<Menu translate={translate}/>)}
										/>
								</Switch>
						</Container>
				</React.Fragment>);
		}
}

const mapStateToProps = state => ({
		translate: getTranslate(state.localize),
		languages: getLanguages(state.localize),
		router: state.router
});

const mapDispatchToProps = dispatch => bindActionCreators({
		setTranslation
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLocalize(App));
