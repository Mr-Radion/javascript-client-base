'use strict';

const objectToArray = (content) => [...Object.values(content)];

// const onRenderItem = (content) => {
//   if (typeof content === Object) {
//     let item = [...Object.values(content)];
//     item.forEach((elem) => `${this}`.appendChild(elem));
//   } else if (typeof content === string || typeof content === number) {
//  this.insertAdjacentHTML('beforeend', content);
//   }else if (!content) {}
// };

export function table(content) {
  let table = document.createElement('table');
  table.className = 'table table-striped';
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => table.appendChild(elem));
  }
  return table;
}

export function thead(content) {
  let thead = document.createElement('thead');
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => thead.appendChild(elem));
  }
  return thead;
}

export function tbody(content) {
  let tbody = document.createElement('tbody');
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => tbody.appendChild(elem));
  }
  return tbody;
}

export function row(content) {
  let row = document.createElement('tr');
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => row.appendChild(elem));
  }
  return row;
}

export function thItem(content) {
  let thItem = document.createElement('th');
  if (content) {
    let item = [...Object.values(content)].join('');
    thItem.insertAdjacentHTML('beforeend', item);
  }
  return thItem;
}

export function col(content) {
  let col = document.createElement('td');
  if (content) {
    if (typeof content === 'object') {
      let item = content;
      col.appendChild(item);
    }
    col.insertAdjacentHTML('beforeend', content);
  }
  return col;
}

export function link(content) {
  let link = document.createElement('a');
  if (content) {
    link.insertAdjacentHTML('beforeend', content);
  }
  return link;
}

export function button(content, style) {
  let button = document.createElement('button');
  button.className = style;
  if (content) {
    button.insertAdjacentHTML('beforeend', content);
  }
  return button;
}
