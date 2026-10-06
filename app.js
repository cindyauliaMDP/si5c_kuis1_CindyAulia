require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const logger = require('./middlewares/logger');
const propertiesRoutes = require('./routes/propertiesRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());

app.use(express.json());

app.use(logger);

app.use(propertiesRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});