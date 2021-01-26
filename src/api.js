export function getUsers() {
  const data = fetch('https://jsonplaceholder.typicode.com/users');
  return data.then((response) => response.json());
}

export function createNewUser(data) {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

export function editUser(data) {
  fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

export function deleteUser(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};
