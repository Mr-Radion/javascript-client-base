import { getUsers } from './api';

const $table = document.querySelector('.table');

let users = getUsers().then((res) => console.log(res));

// users;

// let result = '';

// for (let [name, value] of result) {
//   alert(`${name} = ${value}`);
// }
