// This file is solely for mocking API.

const express = require('express');

const profiles = require('./services/profiles');
const tokens = require('./services/auth');
const images = require('./services/images');
const researchers = require('./services/researchers');

const app = express();

app.use(express.json())

app.use('/', profiles);
app.use('/', tokens);
app.use('/', images);
app.use('/', researchers);

app.listen(3000);
