export function row(content) {
  return `<div class="row">${[...Object.values(content)].join('')}</div>`;
}

export function col(content) {
  return `<div class="col">${content}</div>`;
}