'use strict';

const objectToArray = (content) => [...Object.values(content)];

// domLibrary(selector, type, content) {}

// const onRenderItem = (content) => {
//   if (typeof content === Object) {
//     let item = [...Object.values(content)];
//     item.forEach((elem) => `${this}`.appendChild(elem));
//   } else if (typeof content === string || typeof content === number) {
//  this.insertAdjacentHTML('beforeend', content);
//   }else if (!content) {}
// };

export function table(content) {
  const table = document.createElement('table');
  table.className = 'table table-striped';
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => table.appendChild(elem));
  }
  return table;
}

export function thead(content) {
  const thead = document.createElement('thead');
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => thead.appendChild(elem));
  }
  return thead;
}

export function tbody(content) {
  const tbody = document.createElement('tbody');
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => tbody.appendChild(elem));
  }
  return tbody;
}

export function row(content) {
  const row = document.createElement('tr');
  if (content) {
    let item = objectToArray(content);
    item.forEach((elem) => row.appendChild(elem));
  }
  return row;
}

export function thItem(content) {
  const thItem = document.createElement('th');
  if (content) {
    let item = [...Object.values(content)].join('');
    thItem.insertAdjacentHTML('beforeend', item);
  }
  return thItem;
}

export function col(content) {
  const col = document.createElement('td');
  if (content) {
    if (typeof content === 'object') {
      let item = content;
      col.appendChild(item);
    } else {
      col.insertAdjacentHTML('beforeend', content);
    }
  }
  return col;
}

export function div(style, content) {
  const div = document.createElement('div');
  div.className = style;
  if (content) {
    if (typeof content === 'object') {
      let item = content;
      div.appendChild(item);
    } else {
      div.insertAdjacentHTML('beforeend', content);
    }
  }
  return div;
}

export function link(content, style) {
  const link = document.createElement('a');
  link.className = style;
  if (content) {
    link.insertAdjacentHTML('beforeend', content);
  }
  return link;
}

export function button(content, style) {
  const button = document.createElement('button');
  button.className = style;
  if (content) {
    button.insertAdjacentHTML('beforeend', content);
  }
  return button;
}

export function input(content, style) {
  const input = document.createElement('input');
  input.className = style;
  if (content) {
    input.value = content;
  }
  return input;
}

export function image(link) {
  const img = document.createElement('img');
  if (link) {
    img.src = link;
  }
  return img;
}

