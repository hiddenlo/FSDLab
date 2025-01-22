// Import prompt-sync
const prompt = require('prompt-sync')();

class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
        this.dueDate = null;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(b => b.title !== title);
    }

    borrowBook(title) {
        let book = this.books.find(b => b.title === title && b.status === "available");
        if (book) {
            book.status = "borrowed";
            book.dueDate = new Date();
            book.dueDate.setDate(book.dueDate.getDate() + 14);  // Set due date to 14 days later
            console.log(`You borrowed "${title}". Due date: ${book.dueDate.toLocaleDateString()}`);
        } else {
            console.log("Book is not available or already borrowed.");
        }
    }

    returnBook(title) {
        let book = this.books.find(b => b.title === title);
        if (book) {
            book.status = "available";
            book.dueDate = null;
            console.log(`"${title}" has been returned.`);
        } else {
            console.log("Book not found.");
        }
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    searchByAuthor(author) {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    calculateFines() {
        let today = new Date();
        let fines = [];
        this.books.forEach(book => {
            if (book.status === "borrowed" && book.dueDate < today) {
                let overdueDays = Math.floor((today - book.dueDate) / (1000 * 60 * 60 * 24));
                fines.push({
                    title: book.title,
                    overdueDays: overdueDays,
                    fine: overdueDays * 1  // $1 per day fine
                });
            }
        });
        return fines;
    }

    displayOverdueBooks() {
        let today = new Date();
        return this.books.filter(book => book.status === "borrowed" && book.dueDate < today);
    }
}

let lib = new Library();

// Add a few books to the library
let title = prompt("Enter book title: ");
let author = prompt("Enter book author: ");
let status = "available";

let book1 = new Book(title, author, status);
lib.addBook(book1);

// Borrow a book
let borrowTitle = prompt("Enter book title to borrow: ");
lib.borrowBook(borrowTitle);

// Search books by title or author
let searchByTitle = prompt("Enter title to search for: ");
let foundByTitle = lib.searchByTitle(searchByTitle);
console.log("Books found by title:", foundByTitle);

let searchByAuthor = prompt("Enter author to search for: ");
let foundByAuthor = lib.searchByAuthor(searchByAuthor);
console.log("Books found by author:", foundByAuthor);

// Calculate fines for overdue books
let fines = lib.calculateFines();
console.log("Fines for overdue books:", fines);

// Display overdue books
let overdueBooks = lib.displayOverdueBooks();
console.log("Overdue books:", overdueBooks);
