let inputTitle = document.querySelector('#inputTitle');
let inputAuthor = document.querySelector('#inputAuthor');
let inputPages = document.querySelector('#inputPages');
let inputRead = document.querySelector('#inputRead');
let submit = document.querySelector('#submitNewBook');
let tableData = document.getElementById('tableData');

const title = document.querySelector('[data-title]');
const author = document.querySelector('[data-author]');
const pages = document.querySelector('[data-pages]');
const read = document.querySelector('[data-read]');
const tBody = document.querySelector('tbody');


// Library
let myLibrary = [{
    title: 'Game of Thrones',
    author: 'George R. R. Martin',
    pages: 694,
    read: 'No'
}];

// constructor adding to myLibrary
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// normal function adding to myLibrary
function addBookToLibrary() {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let read = inputRead.value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// opens form and calls other function to create read status and delete buttons
let newBook = document.getElementById('newBook');
newBook.addEventListener('click' , () => {
    openForm();
    changeReadStatusButton();
    deleteBook();
});

// displays forms and calls other function upon submitting
function openForm() {
    document.getElementById('newBookForm').style.display = 'flex';
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        addBookToLibrary();
        showBooksInLibrary();
        addToLocalStorage();
        document.forms[0].reset();
    });
}

// adds books to library from form. Able to change read status along with completely delete row
function showBooksInLibrary() {
    const bookLIst = document.querySelector('#tableBody');
    bookLIst.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const bookRow = document.createElement('tr');
        bookRow.classList.add('book-info');
        bookLIst.appendChild(bookRow);

        const bookTitle = document.createElement('td');
        bookTitle.textContent = myLibrary[i].title;
        bookRow.appendChild(bookTitle);

        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = myLibrary[i].author;
        bookRow.appendChild(bookAuthor);

        const bookPages = document.createElement('td');
        bookPages.textContent = myLibrary[i].pages;
        bookRow.appendChild(bookPages);

        const read = document.createElement('td');
        read.textContent = myLibrary[i].read;
        bookRow.appendChild(read);

        const bookStatusRow = document.createElement('td');
        const bookStatusButton = document.createElement('button');
        bookStatusButton.addEventListener('click', () => {
            if(read.textContent === 'No') {
                read.textContent = 'Yes';
            } else {
                read.textContent = 'No';
            }
        });
        bookStatusButton.textContent = 'Read Status';
        bookStatusRow.appendChild(bookStatusButton);
        bookRow.appendChild(bookStatusRow);

        const delButtonRow = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            bookTitle.textContent = '';
            bookAuthor.textContent = '';
            bookPages.textContent = '';
            read.textContent = '';
            delButtonRow.textContent = '';
            bookStatusRow.textContent = '';

        });
        delButtonRow.appendChild(deleteButton);
        bookRow.appendChild(delButtonRow);

    }
}
showBooksInLibrary();



























