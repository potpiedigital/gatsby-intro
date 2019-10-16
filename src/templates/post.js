import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layouts';
import ReadLink from '../components/read-link';

const PostTemplate = () => (
  <Layout>
    <h1>post title</h1>
    <p
      css={css`
        font-size: 0.75 rem;
      `}
    >
      Posted by (author)
    </p>
    <p>post body goes here</p>
    <ReadLink to="/">&larr; back to home</ReadLink>
  </Layout>
);

export default PostTemplate;
