// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Mock data (replace with your actual data or connect to a database)
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Define a route for handling GET requests to retrieve items
app.get('/api/users', (req, res) => {
  // Return the list of items as JSON
  res.json(items);
});

// Set the port for the server to listen on
const port = 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
