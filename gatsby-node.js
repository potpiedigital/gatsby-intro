exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        frontmatter {
          slug
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panic('failed to create posts', results.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.foreach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: `/${post.frontmatter.slug}/`,
      },
    });
  });
};
