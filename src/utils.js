export function row(content) {
  return `<tr>${[...Object.values(content)].join('')}</tr>`;
}

export function tableHead(content) {
  return `<th>${content}</th>`;
}

export function col(content) {
  return `<td>${content}</td>`;
}

export function link(content) {
  return `<a>${content}</a>`;
}
