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

  console.log(myLibrary);
}

//Placeholder books
const Book1 = new Book('My Hero Academia','Kōhei Horikoshi',212,'No');
const Book2 = new Book('The Great Gatsby','F. Scott Fitzgerald',208,'Yes');
myLibrary.push(Book1);
myLibrary.push(Book2);

const bookContainer = document.createElement('div');
bookContainer.id = 'book-container';
document.body.appendChild(bookContainer);

loopArray();

function loopArray(){
    myLibrary.forEach((book, index)=>{
        console.log(`${index}`)
        addBookToDOM(book,index);
    });
}

function addBookToDOM(addBook, arrayNum){
    let bookDisplay = document.createElement('div');
    bookDisplay.textContent = addBook.info;
    bookContainer.appendChild(bookDisplay).className = `book`;
    removeBook(bookDisplay, arrayNum);
    readBook(bookDisplay, arrayNum, addBook);
}

function removeBook(rmvBook, arrayNum){
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    rmvBook.appendChild(removeButton).className = 'remove-book';
    removeButton.addEventListener('click',()=>{
        rmvBook.textContent = null;
        myLibrary.splice(arrayNum,1);
        console.log(myLibrary);
    });

}

function readBook(rdBook, arrayNum, bookObj){
    const readButton = document.createElement('button');
    readButton.textContent = 'Read';
    rdBook.appendChild(readButton).id='read-button';
    readButton.addEventListener('click',()=>{
        if(bookObj.read==='Yes'){
            bookObj.read = 'No';
            rdBook.textContent = bookObj.info;
        }
        else if(bookObj.read==='No'){
            bookObj.read = 'Yes';
            rdBook.textContent = bookObj.info;
        }
        else{
            alert('Delete book and put yes or no if you read the book');
        }
        console.log(rdBook);
    });
}

const newButton = document.createElement('button');
newButton.textContent = 'New Book';
newButton.id = 'new-book'
document.body.prepend(newButton);

newButton.addEventListener('click', ()=>{
    addBookToLibrary();
    addBookToDOM(myLibrary[myLibrary.length-1],myLibrary.length-1)
});