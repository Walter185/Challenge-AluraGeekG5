export function getUsers() {
    return fetch('http://localhost:3000/users').then(response => response.json());
  }
  
  export function createUser(user) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(response => response.json());
  }
  