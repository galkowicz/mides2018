import React from "react";
import {Link} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {getActiveLanguage, getLanguages, getTranslate, setActiveLanguage} from "react-localize-redux/lib/index";
import {push} from "react-router-redux";
import {connect} from "react-redux";

import { Icon, Container, Menu, Segment } from 'semantic-ui-react';

class AppMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuIconClicked = this.handleMenuIconClicked.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.state = {isMenuOpen: false};
    }

    handleMenuIconClicked() {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    setLanguage(langCode) {
        document.getElementsByTagName('html')[0].setAttribute('lang',langCode);
        this.props.setActiveLanguage(langCode);
    }

    closeMenu() {
        this.setState({isMenuOpen: false});
    }

    render() {
        const {translate, languages} = this.props;

        return (
            <Menu fixed='top' >
                <Container>
                    <Menu.Item header onClick={this.props.changePageHome}>
                        <div key={1} className='mides-logo'><span>מידס</span></div>
                    </Menu.Item>
                    <Menu.Item header position='right'
                               className={this.state.isMenuOpen ? 'menu-icon open' : 'menu-icon close'}>
                        {this.state.isMenuOpen ?
                            <Icon onClick={this.handleMenuIconClicked} name='close' size='big'/> :
                            <Icon onClick={this.handleMenuIconClicked} name='bars' size='big'/>}
                        <Menu.Menu className='menu-container'>
                            <Segment.Group className='c-menu c-menu--slide-top'>
                                <Segment><Link onClick={this.closeMenu}
                                               to='/'>{translate('mainItems.home')}</Link></Segment>
                                <Segment><Link onClick={this.closeMenu}
                                               to='/about'>{translate('mainItems.about')}</Link></Segment>
                                <Segment><Link onClick={this.closeMenu}
                                               to='/menu'>{translate('mainItems.menu')}</Link></Segment>
                                <Segment
                                    onClick={() => this.setLanguage(languages[0].code)}>{languages[0].name}</Segment>
                                <Segment
                                    onClick={() => this.setLanguage(languages[1].code)}>{languages[1].name}</Segment>
                            </Segment.Group>
                        </Menu.Menu>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code,
    languages: getLanguages(state.locale)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePageHome: () => push('/'),
    setActiveLanguage
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppMenu);

// export default AppMenu;