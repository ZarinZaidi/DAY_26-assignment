# Basic RESTful API Assignment

This repository contains the submission for Day 27:  RESTful API Assignment

## Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>

2. Navigate to the project directory:
   ```bash
   cd <project-directory>

3. Install dependencies:
   ```bash
   npm install

4. Run the server:
   ```bash
   node server.js

5. Access the server in your browser:
   http://localhost:3000

## Test API Endpoint
You can test the API using Postman or any other API testing tool.

1. GET all items: http://localhost:3000/items

2. POST a new item: http://localhost:3000/items
   Body: 
   ```bash
   { "name": "Item name", "description": "Item description" }

3. GET a single item by ID: http://localhost:3000/items/:id

4. PUT/update an item by ID: http://localhost:3000/items/:id
   Body: 
   ```bash
   { "name": "Updated name", "description": "Updated description" }

5. DELETE an item by ID: http://localhost:3000/items/:id

## Dependencies

Express, Morgan