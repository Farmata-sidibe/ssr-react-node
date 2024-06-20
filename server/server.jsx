import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';
import App from '../src/App';

const app = express();
const PORT = 5000;

app.use(express.static('dist'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const todos = response.data;

    const appString = renderToString(<App todos={todos} />);
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SSR with React and Express</title>
        </head>
        <body>
          <div id="root">${appString}</div>
          <script src="/client.js"></script>
        </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    res.status(500).send('Error fetching todos');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
