import {initializeApp} from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIrsf0RYY-ikq5pBB716Tvhc_5SdgNsmk",
    authDomain: "openingmatrix.firebaseapp.com",
    projectId: "openingmatrix",
    storageBucket: "openingmatrix.appspot.com",
    messagingSenderId: "888896928324",
    appId: "1:888896928324:web:cb252514c2c107b3ff5a11",
    //measurementId: "G-JXR3WEDCSZ"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(firebaseApp);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  };