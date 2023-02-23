const form = document.querySelector("[data-form]");
const lists = document.querySelector("[data-lists");

let myLibrary = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
})

class Book{
    constructor(title, author,isbn, pages){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.pages = pages;
    }
}

//adding book