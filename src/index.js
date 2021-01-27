import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { row, col, link } from './utils';
import { thead, tbody, buttonEdit, buttonRemove } from './templates';

const $table = document.querySelector('.table');
const $buttonAdd = document.querySelector('.button-add');

// let data = Map();

// Receiving data from the server and displaying it in a table
let usersRecevied = getUsers()
  .then(onUsersRender)
  .catch((error) => console.log(error));

function onUsersRender(user) {
  $table.insertAdjacentHTML('beforeend', thead);
  $table.insertAdjacentHTML('beforeend', tbody);
  let $tbody = $table.lastChild;

  // getUsers()
  //   .then((res) => { res.forEach(element => {

  //   }); })
  //   .catch((error) => console.log(error));

  user
    ? user.forEach((el) => {
        let id = col(el.id);
        let userName = col(el.name);
        let email = col(el.email);
        let rows = row({ id, userName, email, buttonEdit, buttonRemove });
        $tbody.insertAdjacentHTML('beforeend', rows);
      })
    : '';
}

// Function for adding a client to a table

$buttonAdd.addEventListener('click', () => {
  let [id, userName, email] = [col(''), col(''), col('')];
  let rows = row({ id, userName, email, buttonEdit, buttonRemove });
  $table.lastChild.insertAdjacentHTML('beforeend', rows);
  // data
});

// Table row editing function

// Client data saving function

// Function for removing a customer from a table

$buttonAdd.addEventListener('click', () => {
  let [id, userName, email] = [col(''), col(''), col('')];
  let rows = row({ id, userName, email, buttonEdit, buttonRemove });
  $table.lastChild.insertAdjacentHTML('beforeend', rows);
  // data
});

function onUserDelete() {}
