const bookContainer = document.querySelector(".book-container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author} has ${this.pages} Pages, ${this.read}`;
};

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295",
  "not read yet"
);
  const hpOtter = new Book("Harry Potter", "JK Rowling", "469", "always");

bookList = [];
function addBookToLibrary(book) {
  bookList.push(book);
  console.log(bookList);
}
  
function displayBooks() {
  bookList.forEach((elem) => {
    const displayBook = document.createElement("div");;
    displayBook.innerHTML += `
    <h3>Title: ${elem.title}</h3>
    <p>Author: ${elem.author}</p>
    <p>Pages: ${elem.pages}</p>
    <p>Read: ${elem.read}</p>
    `;
    bookContainer.appendChild(displayBook)
    displayBook.classList.add("card");
  });
}
addBookToLibrary(theHobbit)
addBookToLibrary(hpOtter)