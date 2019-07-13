window.addEventListener("resize", needResize);
document.addEventListener("DOMContentLoaded", needResize);


function needResize() {
    let currentWidth = window.innerWidth;
    var bookCount = document.getElementById('bookshelf-overlay').querySelectorAll('img').length;

    if (currentWidth > 937) {
        reShelf(Math.ceil(bookCount/5));
    }
    if (currentWidth < 938) {
        reShelf(Math.ceil(bookCount/4));
    }
    if (currentWidth < 750) {
        reShelf(Math.ceil(bookCount/3));
    }
    if (currentWidth < 563) {
        reShelf(Math.ceil(bookCount/2));
    }
    if (currentWidth < 375) {
        reShelf(Math.ceil(bookCount/1));
    }
}

function reShelf(shelfNumber) {
    // check to see if bookshelf already has correct number of shelves
    if (shelfNumber == document.querySelectorAll('#bookshelf .shelf').length) {
        return null;
    }

    // clear current shelf layout
    document.getElementById('bookshelf').innerHTML = "";

    // add shelves to the bookshelf as specified in shelfNumber
    for (var i = 0; i < shelfNumber; i++) {
        console.log(i);
        var shelf = '<div id="shelf-' + shelfNumber + '" class="shelf"></div>'
        document.getElementById('bookshelf').innerHTML += shelf;
    }
}

/* Modal config script */
// Get all book cover images, modal content, and nav buttons
var images = document.getElementsByClassName('book-cover');
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modal-content");
var span = document.getElementsByClassName("close")[0];
var next = document.getElementById('goNext');
var prev = document.getElementById('goPrev');

// Add specific image ID to each book cover
for (var i = 0; i < images.length; i++) {
    images[i].id=i;
}

// When the user clicks on <span> (x), close the modal
function hideModal() {
    modal.style.display = "none";
}

// current book previewed
var currentBook = 0;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    console.log(event);

    if (event.target.nodeName == 'IMG' && event.target.className == 'book-cover') {
        currentBook = event.target.id;
        modal.style.display = "flex";
        modalContent.innerHTML =
            "<img src='" +
            event.target.currentSrc +
            "'><span class='close' onclick='hideModal()'>&times;</span>";
    }

    else if (event.target == modal || event.target == modalContent) {
        modal.style.display = "none";
    }
}

function navigateModal(direction) {
    console.log('direction is ' + direction)
    if (direction == "next") {
        if (currentBook == images.length - 1) {
            currentBook = 0;
        } else { currentBook++; }
    }

    else if (direction == "prev") {

    }
    console.log(document.getElementById(currentBook).src);
    modalContent.innerHTML =
        "<img src='" +
        document.getElementById(currentBook).src +
        "'><span class='close' onclick='hideModal()'>&times;</span>";
}

// if user clicks back or next, navigate images
next.addEventListener('click', function() { navigateModal("next") });
prev.addEventListener('click', function() { navigateModal("prev") });