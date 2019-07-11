import React from 'react';
import { Icon, Menu } from "semantic-ui-react";

const SocialBanner = (props) => {
		const {links = []} = props;

		return (
			<div className='social-banner'>
					<Menu.Item href={links[0] && links[0].url} target='_blank'><Icon name='instagram' size='big'/></Menu.Item>
					<Menu.Item href={links[1] && links[1].url} target='_blank'><Icon name='facebook' size='big'/></Menu.Item>
			</div>);
};

export default SocialBanner;
