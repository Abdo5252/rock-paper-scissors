let library = [];
let wishlist = [];

function addToLibrary() {
  const bookName = document.getElementById("bookName").value;
  if (bookName) {
    library.push(bookName);
    updateLibrary();
    document.getElementById("bookName").value = "";
  } else {
    alert("Please enter a book name.");
  }
}

function addToWishlist() {
  const wishBook = document.getElementById("wishBook").value;
  if (wishBook) {
    wishlist.push(wishBook);
    updateWishlist();
    document.getElementById("wishBook").value = "";
  } else {
    alert("Please enter a book name.");
  }
}

function acquireBook() {
  const acquiredBook = document.getElementById("acquiredBook").value;
  if (wishlist.includes(acquiredBook)) {
    library.push(acquiredBook);
    wishlist = wishlist.filter(book => book !== acquiredBook);
    updateLibrary();
    updateWishlist();
    document.getElementById("acquiredBook").value = "";
  } else {
    alert("The book is not in your wishlist.");
  }
}

function donateBook() {
  const donatedBook = document.getElementById("donatedBook").value;
  if (library.includes(donatedBook)) {
    library = library.filter(book => book !== donatedBook);
    updateLibrary();
    document.getElementById("donatedBook").value = "";
  } else {
    alert("The book is not in your library.");
  }
}

function updateLibrary() {
  const libraryList = document.getElementById("libraryList");
  libraryList.innerHTML = "";
  library.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    libraryList.appendChild(li);
  });
}

function updateWishlist() {
  const wishlistList = document.getElementById("wishlistList");
  wishlistList.innerHTML = "";
  wishlist.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    wishlistList.appendChild(li);
  });
}
