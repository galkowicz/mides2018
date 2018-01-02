import React from "react";
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTranslate, getActiveLanguage, setActiveLanguage, getLanguages} from 'react-localize-redux';

class Home extends React.Component {
    render() {
        const {translate, languages, setActiveLanguage} = this.props;
        return (<div>
            <h1>{translate('mainItems.home')}</h1>
            <h1 onClick={this.props.changePageAbout}>{translate('mainItems.about')}</h1>
            <h1 onClick={this.props.changePageMenu}>{translate('mainItems.menu')}</h1>
            <ul>
                { languages.map(language =>
                    <li key={language.code}><button onClick={ () => setActiveLanguage(language.code) }>{ language.name }</button></li>
                )}
            </ul>
        </div>);
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
    languages: getLanguages(state.locale)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePageAbout: () => push('/about'),
    changePageMenu: () => push('/menu'),
    setActiveLanguage
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);