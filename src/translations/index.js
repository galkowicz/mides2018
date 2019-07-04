import flamelink from '../utils/flamelinkApp';

const mainItems = require('./mainItems');


export function getFirebaseContent(schemaKey) {
		return flamelink.content.get({ schemaKey });
}

export default { mainItems };