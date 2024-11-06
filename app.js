const dialog = document.querySelector("dialog")
const addBookBtn = document.querySelector("#showModal")
const confirmNewBookBtn = dialog.querySelector("#confirmNewBook")
const bookListContainer = document.querySelector(".book-list-container");


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author} has ${this.pages} Pages, ${this.read}`;
};

bookList = [];
function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read)
  bookList.push(book);
  console.log(bookList)
  displayBooks()
}

function displayBooks() {
  bookListContainer.innerHTML = ''
  bookList.forEach((elem) => {
    const displayBook = document.createElement("div");
    displayBook.innerHTML += `
    <h3>Title: ${elem.title}</h3>
    <p>Author: ${elem.author}</p>
    <p>Pages: ${elem.pages}</p>
    <p>Read: ${elem.read ? "Read" : "Not Read"}</p>
    `;
    bookListContainer.appendChild(displayBook);
    displayBook.classList.add("card");
  });
}
// addBookToLibrary(theHobbit);
// addBookToLibrary(hpOtter);

addBookBtn.addEventListener('click', () => {
  dialog.showModal()
})


confirmNewBookBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const bookTitle = title.value
  const bookAuthor = author.value
  const bookPages = pages.value
  const bookReadStatus = read.checked
  console.log(`${title}`,`${author}`,`${pages}`,`${read}`)
  addBookToLibrary(bookTitle, bookAuthor, parseInt(bookPages), bookReadStatus)
  dialog.close()
})

