// Create a web server
// To run the server, in the terminal type: node comments.js
// To test the server, in the terminal type: curl -X GET http://localhost:3000/comments

// Import the express module
const express = require('express');
// Create an instance of the express module
const app = express();

// Create a route that listens for GET requests on the /comments path
app.get('/comments', (req, res) => {
  // Send a JSON response with an array of comments
  res.json([
    {
      id: 1,
      username: 'alice',
      comment: 'I love your blog!',
    },
    {
      id: 2,
      username: 'bob',
      comment: 'Good job',
    }
  ]);
  }