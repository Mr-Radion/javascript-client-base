export function getUsers() {
  const fetchPromice = fetch('https://jsonplaceholder.typicode.com/users?widgetid="242242"');
  return fetchPromice.then((response) => response.json());
}

export function createNewUser(data) {
  const fetchPromice = fetch('https://jsonplaceholder.typicode.com/users?widgetid="242242"', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  return fetchPromice.then((response) => response.json());
}

export function editUser(data) {
  const fetchPromice = fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  return fetchPromice.then((response) => response.json());
}

export function deleteUser(id) {
  const fetchPromice = fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  });
  return fetchPromice.then((response) => response.json());
}
