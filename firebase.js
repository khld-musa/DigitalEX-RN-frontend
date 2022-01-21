import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_3kiJrgaK1c4PtChqCfMz6dzCkjqtWx8",
  authDomain: "digitalb-5c025.firebaseapp.com",
  projectId: "digitalb-5c025",
  storageBucket: "digitalb-5c025.appspot.com",
  messagingSenderId: "524756056980",
  appId: "1:524756056980:web:c855965e7630eddab26d81",
  };

  let app;
  if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app()
  }
  
  const auth = firebase.auth()
  
  export { auth };


