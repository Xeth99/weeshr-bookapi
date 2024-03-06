## Weeshr - Bookstore API

This Node.js and Express.js bookstore API, built with TypeScript, empowers bookstore management through a RESTful interface." (Focuses on functionalities).

## Features 
CRUD Operations: Create, read, update, and delete book entries.

Express Middleware: Middleware to efficiently process incoming requests and tailored responses.

TypeScript: TypeScript for robust static typing, ensuring code clarity and reducing runtime errors.

Error Handling: Implement robust error handling mechanisms to guarantee API reliability.

API Documentation: Detailed documentation through each API endpoint, its purpose and usage.

## Requirements
Node.js
Express
TypeScript
Yarn
SQLite
Sequelize

## Installation.
Set up the environment by:
. running `yarn` and initialized it by running `yarn init`.
.installed Express using `npx express-generator`
.installed all dependencies and dev-dependencies using `yarn add`.

## Usage
The server is kept on watch by running `yarn build` and it is started by running `yarn start`.

# Access the API.
# for author:
http://localhost:4000/users/addAuthor - to create authors
http://localhost:4000/users/allAuthors - to get all authors
http://localhost:4000/users/getAuthorById/:id - to get a specific author
http://localhost:4000/users/updateAuthor/:id - to update authors
http://localhost:4000/users/deleteAuthor/:id - to delete authors

# for books:
http://localhost:4000/books/addNewBook - to create books
http://localhost:4000/books/allBooks - to get all books
http://localhost:4000/books/getBookById/:id - to get a specific book
http://localhost:4000/books/updateBook/:id - to update books
http://localhost:4000/books/deleteBook/:id - to delete books

# for category:
http://localhost:4000/categories/addCategory - to create categories
http://localhost:4000/categories/allCategories - to get all categories
http://localhost:4000/categories/getCategoryById/:id - to get a specific category
http://localhost:4000/categories/updateCategory/:id - to update categories
http://localhost:4000/categories/deleteCategory/:id - to delete categories

## Environment Variables
PORT: Port number for the server (default port is 3000).
secret: jwt secret

## Testing
Logic to test the endpoints - `yarn test`


