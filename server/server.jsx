// import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import axios from 'axios';
// import App from '../src/App';

// import path from "path";
// // Importe le module "fs" depuis la bibliothèque "fs"
// import fs from "fs";

// const app = express();
// const PORT = 5000;

// app.use(express.static('dist'));

// app.get('/', async (req, res) => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//     const todos = response.data;

//     const appString = renderToString(<App todos={todos} />);

    
//     const html = `
//       <!DOCTYPE html>
//       <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>SSR with React and Express</title>
//         </head>
//         <body>
//           <div id="root">${appString}</div>
//           <script src="/client.js"></script>
//         </body>
//       </html>
//     `;
//     res.send(html);
//   } catch (error) {
//     res.status(500).send('Error fetching todos');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });






import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import axios from "axios";
import App from "../src/App";

const PORT = 5000;
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const todos = response.data;
   

    fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
      if (err) {
        console.error("Error reading index.html:", err);
        return res.status(500).send("An error occurred");
      }

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(<App todos={todos} />)}</div>`
        )
      );
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send("Error fetching todos");
  }
});

app.use(
  express.static(path.resolve(__dirname, "..", "dist"), { maxAge: "30d" })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
