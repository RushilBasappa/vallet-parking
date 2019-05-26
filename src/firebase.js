import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBrdnRcXyGqDCs_xfypnjv6lHy-ZTShbwI',
  authDomain: 'vallet-parking-2237.firebaseapp.com',
  databaseURL: 'https://vallet-parking-2237.firebaseio.com',
  projectId: 'vallet-parking-2237',
  storageBucket: 'vallet-parking-2237.appspot.com',
  messagingSenderId: '164784046739',
  appId: '1:164784046739:web:bc6252d1ba9d2857',
};
firebase.initializeApp(config);

export default firebase;
