//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('book-list');

    bookForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        if (title && author && isbn) {
            addBookToList(title, author, isbn);
            clearForm();
        }
    });

    function addBookToList(title, author, isbn) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td class="delete" onclick="deleteRow(this)">Delete</td>
        `;

        bookList.appendChild(newRow);
    }

    function clearForm() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    window.deleteRow = function (row) {
        const rowIndex = row.parentNode.rowIndex;
        bookList.deleteRow(rowIndex);
    };
});
