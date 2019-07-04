import React from 'react';
import { Translate } from 'react-localize-redux';

const MenuItem = (props) => {

		const { name, description, price } = props;

		return (
			<div className="item">
					<div className="title"><h3><Translate id={name}/></h3></div>
					<div className="titledescription">
							<h3><Translate id={description}/></h3>
							<div className="price">{price}₪</div>
					</div>
			</div>);
};

export default MenuItem;
