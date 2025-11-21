const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'API is running!' });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
