// export function getUsers() {
//  const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetid=213232`);
//  return promise.then((response) => {
//    response.data;
//  });
// }

// (function getUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((res) => console.log(res.map((elem) => `${elem.id} ${elem.name} ${elem.email}`)));
// })();

// (function createNewUser(data) {
//   fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((res) => console.log(res));
// })();

// (function editUser(data) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((res) => console.log(res));
// })();

// (function deleteUser(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: 'DELETE',
//   })
//     .then((response) => response.json())
//     .then((res) => console.log(res));
// })();