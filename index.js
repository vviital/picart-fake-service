// This file is solely for mocking API.

const express = require('express');
const cors = require('cors');

const profiles = require('./services/profiles');
const tokens = require('./services/auth');
const images = require('./services/images');
const researchers = require('./services/researchers');

const app = express();

app.use(cors());
app.use(express.json())

app.use('/profiles', profiles);
app.use('/tokens', tokens);
app.use('/images', images);
app.use('/researches', researchers);

app.listen(3000);
