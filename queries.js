                  //TASK 1 : MongoDB Setup
// creating database (plp_bookstore) and collection (books)

use plp_bookstore
db.createCollection("books")

                //Task 2: Basic CRUD Operations
//Inserting data into books
db.books.insertMany([
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  }
])

// All 10 entries inserted successfully

//Write MongoDB queries to: Find all books in a specific genre
 
 db.books.find({ genre: "Fiction" }).pretty()

//Write MongoDB queries to: Find books published after a certain year
db.books.find({ publicationYear: { $gt: 2015 } })


//Write MongoDB queries to: Find books by a specific author
db.books.find({ author: "Harper Lee" }).pretty()

//Write MongoDB queries to: Update the price of a specific book
db.books.updateOne(
   { title: "Foundation" },
   { $set: { price: 19.99 } }
)
//Write MongoDB queries to: Delete a book by its title
db.books.deleteOne({ title: "Old Book Title" })


                    //Task 3: Advanced Queries
//Write a query to find books that are both in stock and published after 2010
 db.books.find({ inStock: true, publicationYear: { $gt: 2010 } })                   

 //Use projection to return only the title, author, and price fields in your queries
 db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

 //Implement sorting to display books by price (both ascending and descending)
 db.books.find().sort({ price: 1 })
db.books.find().sort({ price: -1 })

//Use the limit and skip methods to implement pagination (5 books per page)
db.books.find().limit(5).skip(0)
db.books.find().limit(5).skip(5)
db.books.find().limit(5).skip(10)


                 //Task 4: Aggregation Pipeline
//Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

//Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

//Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  { $project: { decade: { $subtract: ["$publicationYear", { $mod: ["$publicationYear", 10] }] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])

                      //Task 5: Indexing

//Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })

//Create a compound index on author and published_year
db.books.createIndex({ author: 1, publicationYear: 1 })

//Use the explain() method to demonstrate the performance improvement with your indexes
   **Without Index* 
db.books.find({ title: "Dune" }).explain("executionStats")
   **With Index**
db.books.find({ title: "Dune" }).explain("executionStats")