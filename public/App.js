// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type
}

// Display Constructor
function Display() {
}

// Add methods to display prototype
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryform")
    libraryForm.reset();
}
Display.prototype.add = function (book) {
    tableBody = document.getElementById('tablebody');
    let uistring = `
                <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`
    tableBody.innerHTML += uistring;
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true
    }
}
Display.prototype.show = function (type, dispalymsg) {
    let message = document.getElementById('msg')
    message.innerHTML =`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message!</strong> ${dispalymsg}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`


    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}


// Add Submit Event Listener to libraryform
let libraryForm = document.getElementById("libraryform")
LibraryForm = addEventListener("submit", LibraryFormSubmit)

function LibraryFormSubmit(e) {
    e.preventDefault();

    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type = document.getElementById('type').value;

    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been Successfully ADD')
    }
    else {
        display.show('danger', 'Sorry you cannot Add this Book')
    }

}