// Function to get the latest post by category
export const getLatestPostByCategory = (posts, category) => {
  const categoryPosts = posts.filter((post) => post.category === category);
  const latestPost = categoryPosts.length > 0 ? categoryPosts[0] : null;
  return latestPost;
};

//format date
export const formattedDate = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
