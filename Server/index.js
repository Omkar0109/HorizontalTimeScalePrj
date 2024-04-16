const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 5000;

const dataFilePath = path.join(__dirname, 'sample-data.json');

// Use cors middleware to enable CORS
app.use(cors());

app.get('/api/data', (req, res) => {
  res.sendFile(dataFilePath);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});