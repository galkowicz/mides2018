import firebaseApp from './firebaseConfig';
import flamelink from 'flamelink/app';
import 'flamelink/content';
import 'firebase/database';

const app = flamelink({
		firebaseApp,
		env: 'production', // optional, defaults to `production`
		locale: 'en-US', // optional, defaults to `en-US`
		dbType: 'cf' // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Real-time DB vs Cloud Firestore)
});

export default app;