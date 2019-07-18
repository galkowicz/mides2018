import React, { useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { Translate } from 'react-localize-redux';

const Gallery = (props) => {
		useEffect(() => {
				window.scrollTo(0, 0);
		},);
		const { images } = props;

		return (
			<React.Fragment>
					<div id='gallery' className='gallery'>
							<Header as='h1' textAlign='center' className='gallery__header'><Translate
								id='mainItems.gallery'/></Header>
							<div className='long-div'>bye</div>
					</div>
			</React.Fragment>);
};

export default Gallery;