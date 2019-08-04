import React from 'react';
import { Translate } from 'react-localize-redux';

const About = () => {

		return (
			<div className='about'>

					<div className='home__header'><Translate id='mainItems.restaurant'/></div>
					<div className='about__items'>
							<div className='item'>
									<div className='item__number'>01</div>
									<h1 className='item__title extra-bold'><Translate id='about.firstAbout.title'/></h1>
									<h3 className='item__subtitle'><Translate id='about.firstAbout.subtitle'/></h3>
							</div>
							<div className='item'>
									<div className='item__number'>02</div>
									<h1 className='item__title extra-bold'><Translate id='about.secondAbout.title'/></h1>
									<h3 className='item__subtitle'><Translate id='about.secondAbout.subtitle'/></h3>
							</div>
							<div className='item'>
									<div className='item__number'>03</div>
									<h1 className='item__title extra-bold'><Translate id='about.thirdAbout.title'/></h1>
									<h3 className='item__subtitle'><Translate id='about.thirdAbout.subtitle'/></h3>
							</div>
					</div>
			</div>);
};

export default About;