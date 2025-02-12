import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';
import usePosts from '../components/hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Hi Frontend Masters! Dis Mark</h1>
      <p>Hello Michigan</p>
      <Link to="/about/">Learn More About Me &rarr;</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
