const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use('/posts', postsRoutes);
app.use(cors());
app.listen(5500, () => console.log('Server started : 5500'));
