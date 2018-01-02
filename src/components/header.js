import React from "react";
import {Link} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {getActiveLanguage, getLanguages, getTranslate, setActiveLanguage} from "react-localize-redux/lib/index";
import {push} from "react-router-redux";
import {connect} from "react-redux";

class AppMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuIconClicked = this.handleMenuIconClicked.bind(this);

        this.state = {isMenuOpen: false};
    }

    handleMenuIconClicked() {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    render() {
        const {translate, languages, setActiveLanguage} = this.props;

        return (
            <div className='header'>
                <div key={1} className='mides-logo'><span>מידס</span></div>
                <div key={2} className={this.state.isMenuOpen ? 'menuOpen' : 'menuClose'}>
                    {this.state.isMenuOpen ?
                        <i onClick={this.handleMenuIconClicked} className="fa fa-times" /> :
                        <i onClick={this.handleMenuIconClicked} className='fa fa-bars' />}
                    <nav className='menu-container c-mask'>
                        <ul className='top-menu c-menu c-menu--slide-top'>
                            <li><Link to='/'>{translate('mainItems.home')}</Link></li>
                            <li><Link to='/about'>{translate('mainItems.about')}</Link></li>
                            <li><Link to='/menu'>{translate('mainItems.menu')}</Link></li>
                            {languages.map(language =>
                                <li key={language.code}>
                                    <button onClick={() => setActiveLanguage(language.code)}>{language.name}</button>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        );
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
)(AppMenu);

// export default AppMenu;