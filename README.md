[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19698594&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Getting Started
1. Clone this repository 
2. Install MongoDB locally or set up a MongoDB Atlas account
3. Open MongoDB Shell
4. Run the provided `queries.js` script to populate your database


## Submission
_ Screenshot of MongoDB Compass showing collection (books) and Database (plp_bookstore)_
![alt text](image.png)

** Example of a MongoDB query to: Find all books in a specific genre
    db.books.find({ genre: "Fiction" }).pretty()
![image](https://github.com/user-attachments/assets/9ddb35fb-18c0-4927-bdd1-35c2ec9cd2bc)
