import React, { useState, useEffect } from 'react';
import { Transition, SwitchTransition } from 'react-transition-group';
import { Header, Icon, Image } from 'semantic-ui-react';
import { Translate } from 'react-localize-redux';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DESKTOP_MIN_WIDTH } from '../constants';
import { withRouter } from 'react-router-dom';

const Gallery = (props) => {
		const [isImageOpen, setImageState] = useState(false);
		const [inProp, setInProp] = useState(true);
		const [selectedImage, setSelectedImage] = useState(-1);

		useEffect(() => {
				const numberMatch = props.location.hash.match(/\d/);

				if (numberMatch && !isMobile()) {
						setImageState(true);
						setSelectedImage(+numberMatch[0]);
				}
		}, [props.location.hash]);

		function handleImageClick(imgIndex) {
				if (!isMobile()) {
						setSelectedImage(imgIndex);
						setImageState(true);
						setInProp(true);
						props.history.push(`#gallery/${imgIndex}`);
				}
		}

		function handleCloseFullscreen() {
				setSelectedImage(-1);
				setImageState(false);
				props.history.push(`#gallery`);
		}


		function nextImage() {
				setSelectedImage(selectedImage + 1);
				props.history.push(`#gallery/${selectedImage + 1}`);
		}

		function prevImage() {
				setSelectedImage(selectedImage - 1);
				props.history.push(`#gallery/${selectedImage - 1}`);
		}

		function isLastImage() {
				return selectedImage === props.images.length - 1;
		}

		function isFirstImage() {
				return selectedImage === 0;
		}

		function isMobile() {
				return document.documentElement.clientWidth < DESKTOP_MIN_WIDTH;
		}

		const duration = 400;

		const defaultStyle = {
				transition: `opacity ${duration}ms ease-in-out`,
				opacity: 0,
		};

		const transitionStyles = {
				entering: { opacity: 0 },
				entered: { opacity: 1 },
		};


		const { images } = props;

		return (
			<div id='gallery' className='gallery'>
					<Header as='h1' textAlign='center' className='gallery__header'><Translate
						id='mainItems.gallery'/></Header>
					<div className='gallery__images'>{images.map((imgUrl, index) => {
							return <div onClick={() => handleImageClick(index)} key={index} className='gallery__images__img'><Image
								src={imgUrl}/>
							</div>
					})}</div>

					<div className={'gallery__fullscreen ' + (isImageOpen ? 'show' : '')}>
							<div className='gallery__fullscreen__header'>
									<div className='close' onClick={handleCloseFullscreen}><Icon name='close' size='big'/></div>
							</div>
							<div className='gallery__fullscreen__body'>
									<div className='navigation'>
											<div className={'arrow nav-left ' + (isFirstImage() ? 'hidden' : '')} onClick={prevImage}>
													<FontAwesomeIcon icon={faAngleLeft}/></div>
											<div className={'arrow nav-right ' + (isLastImage() ? 'hidden' : '')} onClick={nextImage}>
													<FontAwesomeIcon icon={faAngleRight}/></div>
									</div>
									<SwitchTransition mode={'in-out'}>
											<Transition in={inProp} timeout={{
													appear: 0,
													enter: 0,
													exit: duration,
											}} key={selectedImage}>
													{state => (
														<div style={{
																...defaultStyle,
																...transitionStyles[state]
														}}>
																<div className='img'><Image src={images[selectedImage]}/></div>
														</div>
													)}
											</Transition>
									</SwitchTransition>
							</div>
					</div>
			</div>);
};

export default withRouter(Gallery);