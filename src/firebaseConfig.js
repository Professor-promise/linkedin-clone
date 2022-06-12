import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: 'AIzaSyCfEQw31DZ6TtXCkPspOKvsycurN8As1JY',
  authDomain: 'linkedin-clone-f2d5b.firebaseapp.com',
  projectId: 'linkedin-clone-f2d5b',
  storageBucket: 'linkedin-clone-f2d5b.appspot.com',
  messagingSenderId: '208476015427',
  appId: '1:208476015427:web:3b094a8e3afadbd44fbdf6',

  hosting: {
    redirects: [
      {
        source: '/',
        destination: '/feed',
        type: 301,
      },
      {
        source: '*',
        destination: '/404',
        type: 301,
      },
    ],
  },
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, { photoURL });
  setLoading(false);
  toast('file uploaded');
}
