import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBUVbfbMoeaHseQ_u5HVnFexHm3qaLPYL0",
  authDomain: "studentinfo-5ebf2.firebaseapp.com",
  projectId: "studentinfo-5ebf2",
  storageBucket: "studentinfo-5ebf2.appspot.com",
  messagingSenderId: "664826145193",
  appId: "1:664826145193:web:7531e21f794ca78de83cb8",
  measurementId: "G-D9C5P0J7P9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;