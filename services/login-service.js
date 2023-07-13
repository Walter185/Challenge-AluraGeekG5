export function getUsers() {
    return fetch('https://64af610dc85640541d4e50bf.mockapi.io/users').then(response => response.json());
  }
  
  export function createUser(user) {
    return fetch('https://64af610dc85640541d4e50bf.mockapi.io/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(response => response.json());
  }
  