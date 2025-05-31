<!DOCTYPE html>
<html lang="en">
<head>
  
</head>
<body>

  <h1>🍽️ MERN Stack Recipe App – Server Side</h1>

  <p>This is the <strong>backend</strong> of the MERN Stack Recipe App, built using <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, and <strong>JWT Authentication</strong>. It handles all the APIs and secure user management.</p>

  <h2>📁 Folder Structure</h2>
  <pre><code>/server
├── node_modules/
├── src/
│   ├── models/
│   │   ├── Recipes.js
│   │   └── Users.js
│   ├── routes/
│   │   ├── recipes.js
│   │   └── users.js
│   ├── config.env
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
  </code></pre>

  <h2>⚙️ Installation & Setup</h2>
  <ol>
    <li><strong>Clone the repository:</strong>
      <pre><code>git clone https://github.com/AnushkaKalpund/MERN-stack-Recipe-App-server-side.git
cd MERN-stack-Recipe-App-server-side</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Create a <code>config.env</code> file</strong> in <code>/src</code> and add:
      <pre><code>MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key</code></pre>
    </li>
    <li><strong>Start the server:</strong>
      <pre><code>nodemon src/index.js</code></pre>
    </li>
  </ol>

  <p>Server runs at: <code>http://localhost:5000</code></p>

  <h2>📦 Dependencies</h2>
  <ul>
    <li><code>axios</code> – For making HTTP requests</li>
    <li><code>bcrypt</code> – For password hashing</li>
    <li><code>cors</code> – For Cross-Origin Resource Sharing</li>
    <li><code>dotenv</code> – To manage environment variables</li>
    <li><code>express</code> – Web framework</li>
    <li><code>jsonwebtoken</code> – For user authentication</li>
    <li><code>mongoose</code> – MongoDB object modeling</li>
    <li><code>nodemon</code> – Auto-restarts server during development</li>
  </ul>

  <h2>🔐 Authentication</h2>
  <p>This server uses <strong>JWT tokens</strong> for secure authentication and bcrypt for password hashing. Tokens are issued upon user login and verified on protected routes.</p>

  <h2>🛠️ API Endpoints</h2>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Route</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>POST</td><td>/api/users/register</td><td>Register a new user</td></tr>
      <tr><td>POST</td><td>/api/users/login</td><td>User login (returns JWT)</td></tr>
      <tr><td>GET</td><td>/api/recipes</td><td>Get all recipes</td></tr>
      <tr><td>POST</td><td>/api/recipes</td><td>Create a new recipe</td></tr>
      <tr><td>PUT</td><td>/api/recipes/:id</td><td>Update a recipe</td></tr>
      <tr><td>DELETE</td><td>/api/recipes/:id</td><td>Delete a recipe</td></tr>
    </tbody>
  </table>

  <h2>🧪 Sample .env File</h2>
  <pre><code>MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/recipesDB
PORT=5000
JWT_SECRET=your_secret_key</code></pre>

  <h2>🤝 Contributing</h2>
  <p>Want to make this better? You're welcome! Fork, clone, and submit a pull request ✨</p>

  

  <h2>👩‍💻 Author</h2>
  <p><strong>Anushka Kalpund</strong><br>
    🔗 <a href="https://github.com/AnushkaKalpund" target="_blank">GitHub Profile</a>
  </p>

</body>
</html>
