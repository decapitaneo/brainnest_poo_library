const form = document.querySelector("[data-form]");

let myLibrary = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    addingBookToLibrary();    
})

class Book{
    constructor(id, title, author,isbn, pages, read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.pages = pages;
        this.read = read;
    }
}

//adding book

function addingBookToLibrary(){
    const bookId = Math.floor(Math.random() * 100000000);
    const title = document.querySelector("[data-title]").value;
    const author = document.querySelector("[data-author]").value;
    const isbn = document.querySelector("[data-isbn]").value;
    const pages = document.querySelector("[data-pages]").value;
    const read = document.querySelector("[data-read]").value;
    if(title === "" || author === "" || isbn === "" || pages === ""){
        alert("preencha todos os campos")
    }else{
        const book = new Book(bookId, title, author, isbn, pages, read);
        myLibrary.push(book);
        loadLibraryIntoDiv();
        showAlert("Book registered with success!")
    }
}

//Localstorage -store the book locally




function loadLibraryIntoDiv() {
    const libraryDiv = document.querySelector("[data-library]");
    libraryDiv.innerHTML = "";
    myLibrary.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        const bookReadButton = book.read === "Yes" ? "Mark as not read" : "Mark as read";
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.isbn}</p>
            <p>${book.pages}</p>
            <p>${book.read}</p>
            <button class="read" type="button" data-read data-id="${book.id}" onclick="changeBookReadStatus(${book.id})">${bookReadButton}</button>
            <button class="delete" type="button" data-delete data-id="${book.id}" onclick="deleteBookFromLibrary(${book.id})">Delete</button>

        `;
        libraryDiv.appendChild(bookDiv);
    });
}

function changeBookReadStatus(bookId) {
    const bookIndex = myLibrary.findIndex((b) => b.id === bookId);
    myLibrary[bookIndex].read = myLibrary[bookIndex].read === "Yes" ? "No" : "Yes";
    loadLibraryIntoDiv();
    showAlert("Status changed successfully!")
}

// When the delete button from a book is clicked, the book is deleted from the library
function deleteBookFromLibrary(bookId) {
    myLibrary = myLibrary.filter((b) => b.id !== bookId);
    loadLibraryIntoDiv();
    showAlert("Book deleted successfully!")
}

//alert message


function showAlert(text){
    let validationMessage = document.getElementById("message");
    validationMessage.innerHTML = text;   
}
