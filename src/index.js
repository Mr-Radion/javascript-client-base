'use strict';

import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { table, thead, tbody, row, col, link, button } from './utils';
import { tableHead, buttonSave } from './templates';
import { editIcon, removeIcon, saveIcon } from './static';

const $container = document.querySelector('.container');
const buttonAdd = button('Добавить клиента', 'button-add');

// let data = Map();

// Receiving data from the server and displaying it in a table
let usersRecevied = getUsers()
  .then(onUsersRender)
  .catch((error) => console.log(error));

function onUsersRender(users) {
  let head = tableHead();
  let body = tbody();
  $container.appendChild(buttonAdd);
  $container.appendChild(table({ head, body }));

  users
    ? users.forEach((user) => {
        let id = col(user.id);
        let userName = col(user.name);
        let email = col(user.email);
        let editLink = link(editIcon);
        let editTd = col(editLink);
        let removeLink = link(removeIcon);
        let removeTd = col(removeLink);
        let rows = row({ id, userName, email, editTd, removeTd });
        body.appendChild(rows);

        // editLink.addEventListener('click', (e) => runUserEdit.call($editLink, e, user.id));
        removeLink.addEventListener('click', (e) => runUserDelete.call(removeLink, e, user.id));
      })
    : '';
}

// Function for adding a client to a table

buttonAdd.addEventListener('click', () => {
  const $tbody = $container.querySelector('tbody');
  let counter = Number($tbody.querySelectorAll('tr:last-child td:first-child')[0].textContent) + 1;

  let editLink = link(editIcon);
  let editTd = col(editLink);
  let removeLink = link(removeIcon);
  let removeTd = col(removeLink);
  let [id, userName, email] = [col(counter), col(''), col('')];
  let rows = row({ id, userName, email, editTd, removeTd });
  $tbody.appendChild(rows);

  removeLink.addEventListener('click', runUserDelete);
});

// Table row editing function

function runUserEdit(e, id) {
  e.preventDefault();
  // <input autofocus/>
  // <input />.focus()

  // let input = document.createElement('input');
  // input.className = 'input';
  // input.value = this.firstElementChild.innerHTML;
  // this.firstElementChild.innerHTML = '';
  // this.appendChild(input);
  // this.removeEventListener('click', runEdit);

  // let self = this;

  // input.addEventListener('blur', function() {
  //   self.firstElementChild.innerHTML = input.value;
  //   self.removeChild(input);
  //   self.addEventListener('click', runEdit);
  // });

  let data = { id };

  editUser(data)
    .then(() => this.closest('tbody').removeChild(this.closest('tr')))
    .catch((error) => {
      console.log(error.message);
    });
}

// Client data saving function

// Function for removing a customer from a table

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
