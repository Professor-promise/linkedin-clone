import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: 'AIzaSyC-97lmuNgpp7dkfNwsj0biKzf1SoVmrp8',
  authDomain: 'linkedin-clone-43e9c.firebaseapp.com',
  projectId: 'linkedin-clone-43e9c',
  storageBucket: 'linkedin-clone-43e9c.appspot.com',
  messagingSenderId: '673027913698',
  appId: '1:673027913698:web:9e9f55c95e001093fbebbb',

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

// upload image

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, { photoURL });
  setLoading(false);
  toast('file uploaded');
}
