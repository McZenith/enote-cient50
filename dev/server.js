const express = require('express');
const renderVM = require('./vm');

const app = express();

// Define a route to render our initial HTML.
app.use('/', (req, res) => {
  const html = renderVM({});

  res.send(html);
});

const PORT = process.env.PORT || 8080;

// Launch the server
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
