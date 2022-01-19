let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = `${title} by ${author}, ${pages} pages, Read: ${read}`
}


function addBookToLibrary() {
  let title = window.prompt('Enter title of book');
  let author = window.prompt('Enter author');
  let pages = window.prompt('Enter number of pages');
  let read = window.prompt('Have you read the book? yes or no.');

  const aBook = new Book(title, author, pages, read);
  myLibrary.push(aBook);

  console.log(aBook);
}

//Placeholder books
const Book1 = new Book('My Hero Academia','Kōhei Horikoshi',212,'No');
const Book2 = new Book('The Great Gatsby','F. Scott Fitzgerald',208,'Yes');
myLibrary.push(Book1);
myLibrary.push(Book2);

addBookToLibrary();

const bookContainer = document.createElement('div');
bookContainer.id = 'book-container';
document.body.appendChild(bookContainer);

loopArray();

function loopArray(){
    myLibrary.forEach(book=>{
        let i = 0;
        let bookDisplay = document.createElement('div');
        bookDisplay.textContent = book.info;
        bookContainer.appendChild(bookDisplay).id = `book${i}`;
        i++
    });
}