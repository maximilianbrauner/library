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

Book.prototype.toggleRead = function () {
  if(this.read === true){
    this.read = false
  }else{
    this.read = true
  }
  }


bookList = [];
function addBookToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read)
  bookList.push(book);
  displayBooks()
}

function displayBooks() {
  bookListContainer.innerHTML = ''
  bookList.forEach((elem, index) => {
    const displayBook = document.createElement("div");
    displayBook.classList.add("card");
    displayBook.setAttribute("data-index", index)
    displayBook.innerHTML += `
    <h3>Title: ${elem.title}</h3>
    <p>Author: ${elem.author}</p>
    <p>Pages: ${elem.pages}</p>
    <p>Read: ${elem.read ? "Read" : "Not Read"}</p>
    <p class="card-buttons">
    <button class="toggle-read-status">Read</button>
    <button class="delete-button">Delete</button>
    </p>
    `;
    const deleteButton = displayBook.querySelector(".delete-button")
    deleteButton.addEventListener('click', () => {
      deleteBook(index)
      displayBooks()
    })
    const toggleReadButton = displayBook.querySelector(".toggle-read-status")
    toggleReadButton.addEventListener('click', () => {
      elem.toggleRead()
      displayBooks()
    })
    bookListContainer.appendChild(displayBook);
  });
}

addBookBtn.addEventListener('click', () => {
  dialog.showModal()
})


confirmNewBookBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const bookTitle = title.value
  const bookAuthor = author.value
  const bookPages = pages.value
  const bookReadStatus = read.checked
  addBookToLibrary(bookTitle, bookAuthor, (bookPages), bookReadStatus)
  dialog.close()
})

function deleteBook(index) {
  bookList.splice(index, 1)
}