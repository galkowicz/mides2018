import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate, getActiveLanguage, setActiveLanguage, getLanguages } from 'react-localize-redux';

class Home extends React.Component {
		render() {
				return (<div>
						<Translate id="mainItems.home"/>
				</div>);
		}
}

const mapStateToProps = state => ({
		currentLanguage: getActiveLanguage(state.localize),
		languages: getLanguages(state.localize)
});

const mapDispatchToProps = dispatch => bindActionCreators({
		setActiveLanguage
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);