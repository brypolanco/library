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

  let aBook = new Book(title, author, pages, read);
  myLibrary.push(aBook);

  console.log(myLibrary);
}

//Placeholder books
let Book1 = new Book('My Hero Academia','Kōhei Horikoshi',212,'No');
let Book2 = new Book('The Great Gatsby','F. Scott Fitzgerald',208,'Yes');
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

//Add DOM elements
function addBookToDOM(addBook, arrayNum){
    let bookDisplay = document.createElement('div');
    bookDisplay.textContent = addBook.info;
    bookContainer.appendChild(bookDisplay).className = `book`;
    
    readBook(bookDisplay, arrayNum);
    removeBook(bookDisplay, arrayNum);
}

function removeBook(rmvBook, arrayNum){
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    rmvBook.appendChild(removeButton).className = 'remove-book';
}

function readBook(rdBook, arrayNum){
    const readButton = document.createElement('button');
    readButton.textContent = 'Read';
    rdBook.appendChild(readButton).className='read-book';
}

const newButton = document.createElement('button');
newButton.textContent = 'New Book';
newButton.id = 'new-book'
document.body.prepend(newButton);

//Event Listeners
let removeBtnArray = Array.from(document.querySelectorAll('.remove-book'));
removeBtnArray.forEach((btn, index) => btn.addEventListener('click',()=>{
    btn.parentElement.textContent = null;
    myLibrary.splice(index,1);
    console.log(myLibrary);
}));

let readBtnArray = Array.from(document.querySelectorAll('.read-book'));
readBtnArray.forEach((btn, index) => btn.addEventListener('click',()=>{
    if(myLibrary[index].read==='Yes'){
        myLibrary[index].read = 'No';
        myLibrary[index].info = `${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages, Read: ${myLibrary[index].read}`;
        btn.parentElement.textContent = '';
        addBookToDOM(myLibrary[index], index)
    }
    else if(myLibrary[index].read==='No'){
        myLibrary[index].read = 'Yes';
        myLibrary[index].info = `${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages, Read: ${myLibrary[index].read}`;
        btn.parentElement.textContent = '';
        addBookToDOM(myLibrary[index], index)
    }
    else{
        alert('Delete book and put yes or no if you read the book');
    }
    console.table(myLibrary);
}));

newButton.addEventListener('click', ()=>{
    addBookToLibrary();
    addBookToDOM(myLibrary[myLibrary.length-1],myLibrary.length-1)
});