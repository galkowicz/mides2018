import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate, getActiveLanguage, setActiveLanguage, getLanguages } from 'react-localize-redux';
import Gallery from '../components/gallery';
import flamelink from '../utils/flamelinkApp';

class Home extends React.Component {

		componentDidMount() {
				// flamelink.storage.getFolders({ structure: 'nested' })
				// 	.then(folders => console.log('Media folders:', folders))
				// 	.catch(error => console.error('Something went wrong while retrieving the folders. Details:', error));
				//
				// flamelink.storage.getFiles({ folderId: "3AQ0Ds6UwncLUJ8BpD6J", folderName: 'gallery images' })
				// 	.then(files => console.log('files', files));
		}

		render() {
				// TODO replace mock to real data
				const tempUrl = 'https://firebasestorage.googleapis.com/v0/b/mides-cms.appspot.com/o/flamelink%2Fmedia%2FtYhfxgg5h4mKGo1DiYwK_11.jpg?alt=media&token=ad5d38f9-b07d-4e83-ba62-dd1b45ac26a4';
				const tempUrl2 = 'https://firebasestorage.googleapis.com/v0/b/mides-cms.appspot.com/o/flamelink%2Fmedia%2FBB5wQ4ve13TguevpMlB0_tea-2975184_1280.png?alt=media&token=8b584d87-817a-4ea8-ac49-a9d90e7145f5';
				const tempUrl3 = 'https://firebasestorage.googleapis.com/v0/b/mides-cms.appspot.com/o/flamelink%2Fmedia%2Fa2RRX94b03BqvaFyeEir_9.jpg?alt=media&token=6e531de3-c11e-4e3d-bfe9-b037a1883c72';
				const images = [tempUrl, tempUrl3, tempUrl, tempUrl2, tempUrl3, tempUrl2, tempUrl, tempUrl2, tempUrl3, tempUrl2, tempUrl, tempUrl2];

				return (
					<React.Fragment>
							<Translate id="mainItems.home"/>
							<div className='long-div'>hi</div>
							<Gallery images={images}/>
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