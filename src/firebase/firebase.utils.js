import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCgbouc_iqsZvaDSwL0gtNkFOnHjJcDpvA',
  authDomain: 'shashap-b22d3.firebaseapp.com',
  projectId: 'shashap-b22d3',
  storageBucket: 'shashap-b22d3.appspot.com',
  messagingSenderId: '568130664632',
  appId: '1:568130664632:web:afe548c6e0343d53209c4d',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: 'user@example.com',
});

export const googleSignIn = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (user, data) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapchot = await userRef.get();

  if (!snapchot.exists) {
    console.log('saving user to firestore');
    const { displayName, email } = user;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...data,
      });
    } catch (error) {
      console.log('error while saving user to firestore');
    }
  }

  return userRef;
};
