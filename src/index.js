'use strict';

import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { saveIcon, editIcon, removeIcon } from './static';
import { row, col, link } from './utils';
import { thead, tbody, buttonEdit, buttonTemplateRemove } from './templates';

const $table = document.querySelector('.table');
const $buttonAdd = document.querySelector('.button-add');

// let data = Map();

// Receiving data from the server and displaying it in a table
let usersRecevied = getUsers()
  .then(onUsersRender)
  .catch((error) => console.log(error.message));

function onUsersRender(users) {
  $table.insertAdjacentHTML('beforeend', thead);
  $table.insertAdjacentHTML('beforeend', tbody);
  let $tbody = $table.lastChild;

  // getUsers()
  //   .then((res) => { res.forEach(element => {

  //   }); })
  //   .catch((error) => console.log(error));

  users
    ? users.forEach((user) => {
        // let id = col(user.id);
        // let userName = col(user.name);
        // let email = col(user.email);
        let $rows = document.createElement('tr');
        let $idTd = document.createElement('td');
        $idTd.insertAdjacentHTML('beforeend', user.id);
        let $userTd = document.createElement('td');
        $userTd.insertAdjacentHTML('beforeend', user.name);
        let $emailTd = document.createElement('td');
        $emailTd.insertAdjacentHTML('beforeend', user.email);
        let $removeTd = document.createElement('td');
        let $removeLink = document.createElement('a');
        $removeLink.insertAdjacentHTML('beforeend', removeIcon);

        $removeTd.appendChild($removeLink);
        $rows.appendChild($idTd);
        $rows.appendChild($userTd);
        $rows.appendChild($emailTd);
        $rows.appendChild($removeTd);
        $tbody.appendChild($rows);

        // $removeTd.insertAdjacentHTML('beforeend', $removeLink);
        // $removeLink.insertAdjacentHTML('beforeend', removeIcon);

        // $tbody.firstChild.appendChild($removeTd);
        // let rows = row({ id, userName, email, buttonEdit, $removeTd });

        // $tbody.insertAdjacentHTML('beforeend', rows);
        // runUserDelete(user.id);
        $removeLink.addEventListener('click', (e) => runUserDelete.call($removeLink, e, user.id));
      })
    : '';
}

// Function for adding a client to a table

// $buttonAdd.addEventListener('click', () => {
//   let [id, userName, email] = [col(''), col(''), col('')];
//   buttonCustomRemove.addEventListener('click', runUserDelete);
//   let rows = row({ id, userName, email, buttonCustomEdit, buttonCustomRemove });
//   $table.lastChild.insertAdjacentHTML('beforeend', rows);
//   // data
// });

// Table row editing function

// Client data saving function

// Function for removing a customer from a table

// $buttonAdd.addEventListener('click', () => {
//   let [id, userName, email] = [col(''), col(''), col('')];
//   let rows = row({ id, userName, email, buttonEdit, buttonRemove });
//   $table.lastChild.insertAdjacentHTML('beforeend', rows);
//   // data
// });

function runUserDelete(e, id) {
  e.preventDefault();
  if (window.confirm('Вы действительно хотите удалить задачу?')) {
    deleteUser(id)
      .then(() => this.closest('tbody').removeChild(this.closest('tr')))
      .catch((error) => {
        console.log(error.message);
        alert('Не удалось удалить задачу');
      });
  }
}
