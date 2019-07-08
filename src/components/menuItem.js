import React from 'react';

const MenuItem = (props) => {
		const { name, description, price, alternativePrice, alternative } = props;
		const shouldRenderAlternative = !alternative.includes('Missing') && alternative !== '';

		return (
			<div className='item'>
					<div className='title'><h3 className='title__text'>{name}</h3></div>
					<div className='price'>{price}₪</div>
					<div className='titledescription'>
							<h3 className='titledescription__text'>{description}</h3>
					</div>
					{shouldRenderAlternative && <React.Fragment>
							<div className='title'>
									<h3 className='title__text'>{alternative}</h3>
							</div>
							<div className='price'>{alternativePrice}₪</div>
					</React.Fragment>}
			</div>);
};

export default MenuItem;
