

📚 Library API

<img src="https://socialify.git.ci/Qhathizwe/Library-API/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Library-API" width="640" height="320" />

A RESTful API designed to help librarians manage a library's collection of books and authors. The system provides functionality for adding new titles and authors, searching the library catalogue, updating incorrect or outdated book information, and removing historical records.

📌 Project Overview

The Library API provides the backend functionality required to manage library catalogue records.

The API focuses on four core librarian requirements:

➕ Add new book titles and authors
🔎 Search books by title, author, or publication year
✏️ Correct and update existing book information
🗑️ Delete historical or outdated records

The project demonstrates how a backend API can be used to manage and manipulate library data through HTTP requests.

🎯 Project Objectives

The main objective of this project is to create an API that allows librarians to efficiently maintain a digital library catalogue.

The API provides CRUD functionality for library records while also allowing librarians to search for specific books using different criteria.

Librarians can:
Function	Description
➕ Add	Add new titles and authors to the library
🔎 Search	Find books using title, author, or year
✏️ Update	Correct or modify existing book information
🗑️ Delete	Remove historical or outdated records
✨ Features
1. Add New Titles and Authors

Librarians can create new library records containing information about books and their authors.

This allows newly acquired books to be added to the library catalogue without manually modifying the database.

Example information:

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
2. Search Books

The API allows librarians to search the library catalogue using different pieces of information.

Books can be searched by:

📖 Title
✍️ Author
📅 Publication year

This makes it easier for librarians to locate specific records without having to manually browse the entire collection.

Example searches:

Search by title
/books?title=The Great Gatsby
Search by author
/books?author=F. Scott Fitzgerald
Search by year
/books?year=1925

The exact URL/query format depends on the implementation of the API.

✏️ Update Book Information

Library records may sometimes contain incorrect or outdated information.

The API allows librarians to update existing records.

For example, a librarian could correct:

A misspelled book title
An incorrect author
An incorrect publication year
Other stored book information

Example:

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}

Updating records helps keep the library catalogue accurate and reliable.

🗑️ Delete Historical Records

The API allows librarians to remove records that are no longer required.

This functionality can be used for historical, obsolete, duplicate, or incorrect records.

A typical REST API deletion request uses:

DELETE /books/:id

The record identified by the ID can then be removed from the library database.

🔄 CRUD Operations

The project demonstrates the fundamental CRUD operations used in REST APIs.

HTTP Method	Operation	Purpose
POST	Create	Add a new book/title
GET	Read	Retrieve or search books
PUT / PATCH	Update	Correct existing information
DELETE	Delete	Remove historical records

These operations provide the foundation for managing the library catalogue.

🔎 API Functionality

The API is designed around the following functionality:

Create
POST /books

Used to add a new book to the library.

Read
GET /books

Used to retrieve library records.

Search
GET /books?title=...
GET /books?author=...
GET /books?year=...

Used to search the catalogue.

Update
PUT /books/:id

or:

PATCH /books/:id

Used to correct existing records.

Delete
DELETE /books/:id

Used to remove historical or unwanted records.

🧪 Example API Workflow

A typical librarian workflow could look like this:

Step 1 — Add a book
POST /books
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
Step 2 — View the library
GET /books
Step 3 — Search for a book
GET /books?title=The Great Gatsby
Step 4 — Correct information
PUT /books/1
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}
Step 5 — Remove an old record
DELETE /books/1
🏗️ Project Structure

The project follows a backend/API structure where requests are received by the API and processed before interacting with the library data.

A typical structure for the project can be represented as:

Library-API/
│
├── controllers/
│
├── routes/
│
├── models/
│
├── config/
│
├── package.json
│
├── .env
│
└── README.md

The exact folders depend on the implementation in the repository.

🛠️ Technologies

This project is a backend REST API.

The technologies used should be listed here according to the implementation in the repository.

For example:

JavaScript
Node.js
Express.js
REST API
Database
JSON
Git & GitHub
🚀 Getting Started
1. Clone the repository
git clone https://github.com/Qhathizwe/Library-API.git
2. Navigate into the project
cd Library-API
3. Install dependencies

If the project uses Node.js:

npm install
4. Configure environment variables

If the project requires environment variables, create a .env file and add the required configuration.

Example:

PORT=3000

Add any database or API configuration required by the project.

5. Start the application

For a typical Node.js project:

npm start

Or, if the project uses a development script:

npm run dev
🧪 Testing the API

The API can be tested using tools such as:

Postman
Insomnia
Thunder Client
VS Code REST Client
cURL

Example:

curl http://localhost:3000/books

For creating a book:

curl -X POST http://localhost:3000/books
📖 Example Library Record

A library record can contain information such as:

{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925
}

The API can then use this information when creating, searching, updating, or deleting records.

🎓 What This Project Demonstrates

This project demonstrates practical understanding of backend development and REST APIs.

It covers:

REST API principles
HTTP methods
CRUD operations
API routing
Request and response handling
Searching/filtering data
Updating records
Deleting records
Working with structured JSON data
Backend application development
💡 Problem Being Solved

Traditional manual library catalogues can make it difficult to quickly find and maintain book information.

The Library API provides a digital way for librarians to manage their catalogue.

Instead of manually searching through records, librarians can use API requests to:

Add → Search → Update → Delete

library records efficiently.

🔮 Possible Future Improvements

The API could be expanded in the future with features such as:

🔐 Librarian authentication
👥 User and librarian roles
📚 Book availability tracking
🔄 Borrowing and returning books
📅 Due-date management
🔎 Advanced search and filtering
📊 Library statistics
📝 API documentation with Swagger/OpenAPI
🧪 Automated unit and integration tests
🌐 Frontend dashboard
📱 Mobile application integration
👨‍💻 Author

Scelo Mike Phoswa

GitHub:

https://github.com/Qhathizwe

📄 License

This project is available for educational and portfolio purposes.

⭐ Project Summary

The Library API is a backend REST API that provides librarians with the essential tools needed to manage a library catalogue.

Its core functionality allows librarians to:

Add new titles and authors → Search books → Correct information → Delete historical records.

The project demonstrates practical backend development, REST API design, CRUD operations, and data management.

Show
