import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getActiveLanguage, getLanguages, getTranslate, setActiveLanguage, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import backgroundImage from '../assets/headerBack.jpg';

import { Container, Menu, Image } from 'semantic-ui-react';
import HeaderItems from './headerItems';
import { getFirebaseContent } from "../translations";
import { LINKS, SOCIAL_LINKS } from '../constants';
import SocialBanner from './socialBanner';

class AppMenu extends React.Component {
		constructor(props) {
				super(props);
				this.onItemClick = this.onItemClick.bind(this);
				this.closeMenu = this.closeMenu.bind(this);
				this.state = { socialLinks: { facebook: '', instagram: '' } }

		}

		componentDidMount() {
				getFirebaseContent('links').then((content) => {
						const parsedContent = content[LINKS][SOCIAL_LINKS];
						this.setState({ socialLinks: parsedContent });
				});
		}

		setLanguage(langCode) {
				setActiveLanguage(langCode);
				document.getElementsByTagName('html')[0].setAttribute('lang', langCode);
				this.props.setActiveLanguage(langCode);
		}

		closeMenu() {
				this.setState({ isMenuOpen: false });
		}

		onItemClick(event) {
				if (event === 'en' || event === 'he') {
						this.setLanguage(event);
				}
		}

		render() {
				const { translate } = this.props;
				const { socialLinks } = this.state;

				return (<React.Fragment>
						<Menu fixed='top'>
								<Container className='header'>
										<Menu.Item className='header__logo'><Link to='/'>
												<div className='mides-logo'><span>מידס</span></div>
										</Link> </Menu.Item>
										<Menu.Item><SocialBanner links={socialLinks} /></Menu.Item>
										<Menu.Item className='header__menu'><HeaderItems translate={translate}
										                                                 handleItemClick={this.onItemClick}/></Menu.Item>
								</Container>
						</Menu>
						<Image src={backgroundImage} size='massive'/>
				</React.Fragment>);
		}
}

const mapStateToProps = state => ({
		translate: getTranslate(state.localize),
		currentLanguage: getActiveLanguage(state.localize),
		languages: getLanguages(state.localize)
});

const mapDispatchToProps = dispatch => bindActionCreators({
		setActiveLanguage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLocalize(AppMenu));

// export default AppMenu;