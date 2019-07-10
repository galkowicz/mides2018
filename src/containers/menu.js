import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../components/menuItem';
import { Translate } from 'react-localize-redux';

class Menu extends React.PureComponent {
		createMenuItems(items, prefix) {
				const { translate } = this.props;

				return Object.entries(items).map((item, index) => {
						const name = `${prefix}.${item[0]}.name`;
						const description = `${prefix}.${item[0]}.description`;
						const alternative = `${prefix}.${item[0]}.alternative`;

						return <MenuItem name={translate(name)} description={translate(description)} price={item[1].price}
						                 alternative={translate(alternative)}
						                 alternativePrice={item[1].alternativePrice}
						                 key={index}/>;
				});
		}

		render() {
				const { translations } = this.props;

				const brazilian = translations.brazilian && this.createMenuItems(translations.brazilian, 'brazilian');
				const starters = translations.starters && this.createMenuItems(translations.starters, 'starters');
				const main = translations.main && this.createMenuItems(translations.main, 'main');
				const fish = translations.fish && this.createMenuItems(translations.fish, 'fish');
				const desserts = translations.desserts && this.createMenuItems(translations.desserts, 'desserts');
				const brazilianDrinks = translations.brazilianDrinks && this.createMenuItems(translations.brazilianDrinks, 'brazilianDrinks');
				const coldDrinks = translations.coldDrinks && this.createMenuItems(translations.coldDrinks, 'coldDrinks');
				const hotDrinks = translations.hotDrinks && this.createMenuItems(translations.hotDrinks, 'hotDrinks');
				const beers = translations.beers && this.createMenuItems(translations.beers, 'beers');

				return (<div className='kind-of-black food-menu'>
						<div className='title-main'><Translate id={'mainItems.menu'}/></div>

						<div className='title-description'><h2 className='text'><Translate id={'mainItems.startersTitle'}/></h2></div>
						<div className='subcategory'>
								{starters && starters.map(item => item)}
						</div>

						<div className='title-description'><h2 className='text'><Translate id={'mainItems.brazilianTitle'}/></h2></div>
						<div className='subcategory'>

								{brazilian && brazilian.map(item => item)}

						</div>

						<div className='title-description'><h2 className='text'><Translate id={'mainItems.mainCourses'}/></h2></div>
						<div className='subcategory'>

								{main && main.map(item => item)}

						</div>

						<div className='title-description'><h2 className='text'><Translate id={'mainItems.fishAndPasta'}/></h2></div>
						<div className='subcategory'>

								{fish && fish.map(item => item)}

						</div>

						<div className='title-description'><h2 className='text'><Translate id={'mainItems.desserts'}/></h2></div>
						<div className='subcategory'>
								{desserts && desserts.map(item => item)}

						</div>

						<div className='title-description'><h2 className='text'><Translate id={'mainItems.drinks'}/></h2></div>
						<div className='subcategory drinks'>

								<div className='subcategory__category'><Translate id={'mainItems.brazilianDrinks'}/></div>
								{brazilianDrinks && brazilianDrinks.map(item => item)}

								<div className='subcategory__category'><Translate id={'mainItems.softDrinks'}/></div>
								{coldDrinks && coldDrinks.map(item => item)}

								<div className='subcategory__category'><Translate id={'mainItems.beers'}/></div>
								{beers && beers.map(item => item)}

								<div className='subcategory__category'><Translate id={'mainItems.hotDrinks'}/></div>
								{hotDrinks && hotDrinks.map(item => item)}

						</div>
				</div>);
		}
}

const mapStateToProps = state => ({
		translations: state.translations
});

export default connect(
	mapStateToProps
)(Menu);