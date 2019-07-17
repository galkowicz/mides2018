import React from 'react';
import { Menu, Segment, Dropdown, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { Mobile, Default } from '../style/mediaQueries';

const HeaderItems = withRouter(({ history, ...props }) => {
		const { translate } = props;
		const dropdownTriggerElement = <div>
				<Icon name='close' size='big'/>
				<Icon name='bars' size='big'/></div>;

		return (
			<Menu.Menu>
					<Default>
							<Segment.Group>
									<Segment><Link to='/'>{translate('mainItems.home')}</Link></Segment>
									<Segment><Link to='/about'>{translate('mainItems.about')}</Link></Segment>
									<Segment><Link to='/menu'>{translate('mainItems.menu')}</Link></Segment>
							</Segment.Group>
					</Default>
					<Mobile>
							<Dropdown item trigger={dropdownTriggerElement} icon={null}>
									<Dropdown.Menu button='true' item='true'>
											<Dropdown.Item onClick={() => history.push('/')}> {translate('mainItems.home')} </Dropdown.Item>
											<Dropdown.Item
												onClick={() => history.push('/about')}> {translate('mainItems.about')} </Dropdown.Item>
											<Dropdown.Item
												onClick={() => history.push('/menu')}> {translate('mainItems.menu')} </Dropdown.Item>
											<Dropdown.Item><a href='https://waze.com/ul/hsv8es2dhq' target='_blank' rel='noopener noreferrer'
											                  className='waze-link'>WAZE</a></Dropdown.Item>
									</Dropdown.Menu>
							</Dropdown>
					</Mobile>
			</Menu.Menu>);
});

export default React.memo(HeaderItems);