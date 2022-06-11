import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../../features/postsSlice';
import { selectUser } from '../../features/userSlice';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handlePost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = user.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='postAuthor'>Author:</label>
        <select
          type='text'
          id='postAuthor'
          placeholder='Author...'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=''></option>
          {userOptions}
        </select>
        <label htmlFor='postContent'>Content:</label>
        <input
          type='text'
          id='postContent'
          placeholder='Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className='bg-green-300 cursor-pointer text-white p-2'
          type='submit'
          onClick={handlePost}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddForm;
