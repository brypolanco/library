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
        let displayContent = addBookToDOM(book,index);
        readButton(displayContent, index);
        removeButton(displayContent, index);
    });
}

//Add DOM elements
const newButton = document.createElement('button');
newButton.textContent = 'New Book';
newButton.id = 'new-book'
document.body.prepend(newButton);

function addBookToDOM(addBook, arrayNum){
    let bookDisplay = document.createElement('div');
    bookContainer.appendChild(bookDisplay).className = `book`;
    let bookText = document.createElement('div');
    bookText.textContent = addBook.info;
    bookDisplay.appendChild(bookText).className = 'text';

    addBook.domtext = bookText;
    return bookDisplay;
}

function readButton(bookDisplay, arrayNum){
    const readButton = document.createElement('button');
    readButton.textContent = 'Read';
    bookDisplay.appendChild(readButton).className='read-book';
    return readButton;
}

function removeButton(bookDisplay, arrayNum){
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    bookDisplay.appendChild(removeButton).className = 'remove-book';
    return removeButton;
}


//Event Listeners
newButton.addEventListener('click', ()=>{
    addBookToLibrary();
    let displayContent = addBookToDOM(myLibrary[myLibrary.length-1],myLibrary.length-1);
    readButton(displayContent, myLibrary.length-1);
    removeButton(displayContent, myLibrary.length-1);
});


document.querySelectorAll('.read-book').forEach((btn, index) => btn.addEventListener('click',()=>{
    if(myLibrary[index].read==='Yes'){
        myLibrary[index].read = 'No';
    }
    else if(myLibrary[index].read==='No'){
        myLibrary[index].read = 'Yes';
    }
    else{
        alert('Delete book and put yes or no if you read the book');
    }
    myLibrary[index].info = `${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages, Read: ${myLibrary[index].read}`;
    myLibrary[index].domtext.textContent = myLibrary[index].info;
    console.table(myLibrary);
}));


document.querySelectorAll('.remove-book').forEach((btn, index) => btn.addEventListener('click',()=>{
    btn.parentElement.remove();
    myLibrary.splice(index,1);
    console.log(myLibrary);
}));

/*
let readButtons = Array.from(document.querySelectorAll('.read-book'));
readButtons.forEach((btn, index) => btn.addEventListener('click',()=>{
    if(myLibrary[index].read==='Yes'){
        myLibrary[index].read = 'No';
    }
    else if(myLibrary[index].read==='No'){
        myLibrary[index].read = 'Yes';
    }
    else{
        alert('Delete book and put yes or no if you read the book');
    }
    myLibrary[index].info = `${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages, Read: ${myLibrary[index].read}`;
    myLibrary[index].domtext.textContent = myLibrary[index].info;
    console.table(myLibrary);
}));

let removeButtons = Array.from(document.querySelectorAll('.remove-book'));
    removeButtons.forEach((btn, index) => btn.addEventListener('click',()=>{
    btn.parentElement.remove();
    myLibrary.splice(index,1);
    removeButtons.splice(index,1);
    readButtons.splice(index,1);
    console.log(myLibrary);
    console.log(removeButtons);
}));
*/