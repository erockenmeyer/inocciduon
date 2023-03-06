// add external techs
const express = require('express');
const session = require('express-session');
const path = require('path')
const exphbs = require('express-handlebars');

// internal connections
const routes = require('./controllers');

// initialize things
const app = express();
const PORT = process.env.PORT || 3001;

// set up sql things
const sequelize = require('./config/connection');
