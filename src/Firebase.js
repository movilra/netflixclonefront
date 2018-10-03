import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDk0u0O1Qy7k1Nl0nb4wzZy5nxZGUPFa2Y",
    authDomain: "b23-project-netflix.firebaseapp.com",
    databaseURL: "https://b23-project-netflix.firebaseio.com",
    projectId: "b23-project-netflix",
    storageBucket: "b23-project-netflix.appspot.com",
    messagingSenderId: "119729840551"
  };

  export default firebase.initializeApp(config);

  