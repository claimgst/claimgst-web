export const fetchUser = (email, password) => {
  let config = {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password})
  }
  
  return fetch(`http://localhost:3000/users/sign_in/`, config)
}