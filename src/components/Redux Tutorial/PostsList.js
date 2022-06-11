import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../features/postsSlice';
import Author from './Author';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  /* 
  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date)); */

  const renderedPosts = posts.map((post) => (
    <article
      key={post.id}
      className='border-2 p-2 border-black w-[30rem] rounded-lg'
    >
      <h3>{post.title}</h3>
      <p className='text-sm text-gray-400 mb-2'>
        <Author userId={post.userId} />
      </p>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section className='flex gap-4 flex-col items-center h-[100vh] justify-center text-2xl'>
      <h2 className='text-4xl font-medium'>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
