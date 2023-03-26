export const fetchSession = () => {
  return fetch('/api/session')
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    return response.json();
  })
}

export const fetchUser = (username) => {
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify( {username} ),
  })
  .catch( err => Promise.reject({ error: 'network-error' }))
  .then( response => {
    if (response.ok) {
      return response.json()
    } else {
      return response.json().then( err => Promise.reject(err) )
    }
  })
}

export const fetchWord = () => {
  return fetch('/api/word')
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    return response.json();
  })
}

export const fetchUpdateWord = (word) => {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify( { word } ),
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if (response.ok) {
      return response.json()
    } else {
      return response.json().then( err => Promise.reject(err) )
    }
  })
}

export const fetchDelete = () => {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
  .catch( err => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if (response.ok) {
      return response.json()
    }
  })
}