export const fetchPosts = (url = 'http://localhost:3000/posts/today') => {
  return fetch(url)
  .then(response => response.json())
}