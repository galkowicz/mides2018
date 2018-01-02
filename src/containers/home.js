import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTranslate, getActiveLanguage, setActiveLanguage, getLanguages} from 'react-localize-redux';

class Home extends React.Component {
    render() {
        const {translate} = this.props;
        return (<div>
            <h1>{translate('mainItems.home')}</h1>
        </div>);
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
    languages: getLanguages(state.locale)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setActiveLanguage
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);