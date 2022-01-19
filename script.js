let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = `${title} by ${author}, ${pages} pages, ${read}`
}


function addBookToLibrary(objName) {
  let title = window.prompt('Enter title of book');
  let author = window.prompt('Enter author');
  let pages = window.prompt('Enter number of pages');
  let read = window.prompt('Have you read the book? yes or no.');

  let objName = new Book(title, author, pages, read);
}