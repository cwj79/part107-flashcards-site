const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname), { extensions: ['html'] }));

app.listen(PORT, () => {
  console.log(`Part 107 flashcards running at http://localhost:${PORT}`);
});
