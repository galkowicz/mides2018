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
import translations, { getFirebaseContent } from './translations/index';
import { parseMenuContent } from './utils/contentParser';
import { bindActionCreators } from 'redux';
import { setTranslation } from "./reducers/translationsReducer";
import { STARTERS_ID, BRAZILIAN_ID } from './constants';

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
							const parsedStarters = parseMenuContent(content[STARTERS_ID]);
							const parsedBrazilian = parseMenuContent(content[BRAZILIAN_ID]);

							const parsedTranslations = {starters: parsedStarters, brazilian: parsedBrazilian};
							Object.assign(translations, parsedTranslations);
							this.props.setTranslation(parsedTranslations);
							this.props.addTranslation(translations);
					}).catch((error) => {
						console.error(error);
				});
		}

		render() {
				const { translate, currentLanguage } = this.props;

				return (<div className={currentLanguage}>
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
				</div>);
		}
}

const mapStateToProps = state => ({
		translate: getTranslate(state.localize),
		currentLanguage: getActiveLanguage(state.localize),
		languages: getLanguages(state.localize),
		router: state.router
});

const mapDispatchToProps = dispatch => bindActionCreators({
		setTranslation
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLocalize(App));
