const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const experiencesRouter = require('./routes/experiences');

app.use(cors());
app.use(express.json());
app.use('/api/experiences', experiencesRouter);


mongoose.connect('mongodb://localhost:27017/myportfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
