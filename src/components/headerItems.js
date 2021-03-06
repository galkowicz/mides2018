import React from 'react';
import { Menu, Segment, Dropdown, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Mobile, Default } from '../style/mediaQueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWaze } from '@fortawesome/free-brands-svg-icons';

const HeaderItems = withRouter(({ history, ...props }) => {
		const { translate } = props;
		const dropdownTriggerElement = <div>
				<Icon name='close' size='big'/>
				<Icon name='bars' size='big'/></div>;

		const scrollEve = (el) => {
				el.scrollIntoView({
						block: 'start',
						inline: 'nearest',
						behavior: 'smooth'
				});
		};

		const scrollTop = () => {
				window.scrollTo({
						top: 0,
						behavior: 'smooth'
				});
		};

		return (
			<Menu.Menu>
					<Default>
							<Segment.Group>
									<Segment><Link to='/' onClick={scrollTop}>{translate('mainItems.home')}</Link></Segment>
									<Segment><HashLink smooth scroll={scrollEve}
									                   to='/#about'>{translate('mainItems.about')}</HashLink></Segment>
									<Segment><Link to='/menu'>{translate('mainItems.menu')}</Link></Segment>
									<Segment><HashLink smooth scroll={scrollEve}
									                   to='/#gallery'>{translate('mainItems.gallery')}</HashLink></Segment>
							</Segment.Group>
					</Default>
					<Mobile>
							<Dropdown item trigger={dropdownTriggerElement} icon={null}>
									<Dropdown.Menu button='true' item='true'>
											<Dropdown.Item className='menu__item'
											               onClick={() => {
													               history.push('/');
													               scrollTop()
											               }}> {translate('mainItems.home')} </Dropdown.Item>
											<Dropdown.Item className='menu__item zero-padding'><HashLink smooth
											                                                             scroll={scrollEve}
											                                                             to='/#about'>{translate('mainItems.about')}</HashLink>
											</Dropdown.Item>
											<Dropdown.Item className='menu__item'
											               onClick={() => history.push('/menu')}> {translate('mainItems.menu')} </Dropdown.Item>
											<Dropdown.Item className='menu__item zero-padding'> <HashLink smooth scroll={scrollEve}
											                                                              to='/#gallery'>{translate('mainItems.gallery')}</HashLink></Dropdown.Item>
											<Dropdown.Item className='menu__item zero-padding'><a href='https://waze.com/ul/hsv8es2dhq'
											                                                      target='_blank'
											                                                      rel='noopener noreferrer'
											                                                      className='waze-link'>WAZE</a>
													<FontAwesomeIcon
														className='social-banner__icon' icon={faWaze}/></Dropdown.Item>
											<Dropdown.Item className='menu__item zero-padding'><a href='tel:086803441'
											                                                      rel='noopener noreferrer'
											                                                      className='phone-link'>{translate('mainItems.call')}</a>
													<FontAwesomeIcon
														className='social-banner__icon' icon={faPhone}/>
											</Dropdown.Item>
									</Dropdown.Menu>
							</Dropdown>
					</Mobile>
			</Menu.Menu>);
});

export default React.memo(HeaderItems);