import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import Posts from './Posts';
import SearchInput from './SearchInput';
import { db } from '../../firebaseConfig';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const Feed = () => {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const postsRef = collection(db, 'posts');

  const handlePost = async (e) => {
    e.preventDefault();

    if (!message) {
      return;
    }
    await addDoc(postsRef, {
      message: message,
      timestamp: serverTimestamp(),
    });
    setMessage('');
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const q = query(postsRef, orderBy('timestamp', 'desc'), limit(10));
        const querySnap = await getDocs(q);

        setPosts(querySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        toast.error('Something went wrong');
        toast.error("Couldn't fetch posts");
      }
    };
    getPosts();
  }, [postsRef]);

  return (
    <div className='md:basis-[60%] lg:basis-[55%]'>
      <SearchInput
        message={message}
        setMessage={setMessage}
        handlePost={handlePost}
      />

      {loading ? (
        <div className='flex items-center justify-center border-t mt-2 border-dotted border-mainGray'>
          <div className='spinner mt-1'></div>
        </div>
      ) : (
        <FlipMove>
          {posts?.map(({ id, message }) => (
            <Posts key={id} message={message} />
          ))}
        </FlipMove>
      )}
    </div>
  );
};

export default Feed;
