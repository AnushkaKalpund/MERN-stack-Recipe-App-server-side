<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MERN Stack Recipe App – Server Side</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f9f9f9;
      padding: 2rem;
      max-width: 900px;
      margin: auto;
    }
    h1, h2, h3 {
      color: #333;
    }
    code, pre {
      background-color: #f4f4f4;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      padding: 1rem;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
      border: 1px solid #ccc;
    }
    a {
      color: #007bff;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <h1>🍽️ MERN Stack Recipe App – Server Side</h1>

  <p>This is the <strong>backend</strong> of the MERN Stack Recipe App. It is built using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, providing RESTful APIs to manage recipe data such as creating, reading, updating, and deleting recipes.</p>

  <h2>🚀 Tech Stack</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB (Mongoose)</li>
    <li>CORS</li>
    <li>dotenv</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <pre><code>/server
├── config/           # DB connection configuration
├── controllers/      # Route logic
├── models/           # Mongoose schema
├── routes/           # API route definitions
├── .env              # Environment variables
├── server.js         # Main server file
└── package.json
  </code></pre>

  <h2>⚙️ Installation & Setup</h2>
  <ol>
    <li><strong>Clone the repository</strong>
      <pre><code>git clone https://github.com/AnushkaKalpund/MERN-stack-Recipe-App-server-side.git
cd MERN-stack-Recipe-App-server-side</code></pre>
    </li>
    <li><strong>Install dependencies</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Create a <code>.env</code> file</strong> in the root and add:
      <pre><code>MONGO_URI=your_mongodb_connection_string
PORT=5000</code></pre>
    </li>
    <li><strong>Start the server</strong>
      <pre><code>npm start</code></pre>
    </li>
  </ol>
  <p>The server will run on <code>http://localhost:5000</code></p>

  <h2>🛠️ API Endpoints</h2>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>GET</td><td>/api/recipes</td><td>Get all recipes</td></tr>
      <tr><td>GET</td><td>/api/recipes/:id</td><td>Get recipe by ID</td></tr>
      <tr><td>POST</td><td>/api/recipes</td><td>Create a new recipe</td></tr>
      <tr><td>PUT</td><td>/api/recipes/:id</td><td>Update recipe by ID</td></tr>
      <tr><td>DELETE</td><td>/api/recipes/:id</td><td>Delete recipe by ID</td></tr>
    </tbody>
  </table>

  <h2>🔒 Environment Variables</h2>
  <table>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>MONGO_URI</code></td><td>Your MongoDB connection string</td></tr>
      <tr><td><code>PORT</code></td><td>Port to run the backend</td></tr>
    </tbody>
  </table>

  <h2>📦 Dependencies</h2>
  <ul>
    <li>express</li>
    <li>mongoose</li>
    <li>cors</li>
    <li>dotenv</li>
    <li>nodemon (for development)</li>
  </ul>

  <h2>🤝 Contributing</h2>
  <p>Contributions are welcome!<br>
  Feel free to fork the repo and submit a pull request.</p>

  <h2>📄 License</h2>
  <p>This project is licensed under the <a href="#">MIT License</a>.</p>

  <h2>💡 Author</h2>
  <p><strong>Anushka Kalpund</strong><br>
  🔗 <a href="https://github.com/AnushkaKalpund" target="_blank">GitHub Profile</a></p>

</body>
</html>
