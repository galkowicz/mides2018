import React from 'react';
import { connect } from 'react-redux';
import { getActiveLanguage, getLanguages, withLocalize } from 'react-localize-redux';
import Gallery from '../components/gallery';
import flamelink from '../utils/flamelinkApp';
import translations, { getFirebaseContent } from '../translations';
import { parseAboutContent } from '../utils/contentParser';
import About from '../components/about';

class Home extends React.Component {
		constructor(props) {
				super(props);
				this.state = { images: [] };
		}

		componentDidMount() {
				flamelink.content.get({ schemaKey: 'galleryImages', populate: true }).then((response) => {
						response && this.setState({ images: this.getImagesUrl(response.imageDeck) });
				});

				getFirebaseContent('about').then((content) => {
						const parsedAboutContent = parseAboutContent(content);
						Object.assign(translations, parsedAboutContent);
						this.props.addTranslation(translations);
				});
		}

		getImagesUrl(images) {
				return images.map((image) => {
						return image.image[0].url;
				});
		}

		render() {
				const { images } = this.state;

				return (
					<React.Fragment>
							<div className='header-container'>
									<div className='header-overlay'>
											<div className='header__logo'>
													<div className='mides-logo'><span>מידס</span></div>
													<div className='mides-sublogo'><span>מסעדה ברזילאית</span></div>
											</div>
									</div>
							</div>
							<div className='home' id='about'>
									<About/>
							</div>
							<Gallery images={images}/>
					</React.Fragment>
				);
		}
}

const mapStateToProps = state => ({
		currentLanguage: getActiveLanguage(state.localize),
		languages: getLanguages(state.localize)
});

export default connect(
	mapStateToProps
)(withLocalize(Home));