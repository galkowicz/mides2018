import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate, getActiveLanguage, setActiveLanguage, getLanguages } from 'react-localize-redux';
import Gallery from '../components/gallery';
import flamelink from '../utils/flamelinkApp';

class Home extends React.Component {

		componentDidMount() {
				flamelink.storage.getFolders({ structure: 'nested' })
					.then(folders => console.log('Media folders:', folders))
					.catch(error => console.error('Something went wrong while retrieving the folders. Details:', error));

				flamelink.storage.getFiles({folderId: "3AQ0Ds6UwncLUJ8BpD6J"})
					.then(files => console.log('files', files));
		}

		render() {
				return (
					<React.Fragment>
							<Translate id="mainItems.home"/>
							<div className='long-div'>hi</div>
							<Gallery />
					</React.Fragment>
				);
		}
}

const mapStateToProps = state => ({
		currentLanguage: getActiveLanguage(state.localize),
		languages: getLanguages(state.localize)
});

const mapDispatchToProps = dispatch => bindActionCreators({
		setActiveLanguage
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);