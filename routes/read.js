const express = require('express');
const route = express.Router();
const { Read } = require('../controllers/crud');

//Simple Route which route to a page that lists all the data in the JSON DB File as a HTML Table
//Using POST
route.post('/', Read.renderReadPage);

//Using GET
route.get('/', Read.renderReadPage);

/**
 * When specified http://localhost:3000/read/all, it will fetch all the Key-Value Pairs in the JSON DB File,
 * and display all the Key-Value pairs as response.
 */
route.get('/all', Read.readAllData)

/**
 * When specified http://localhost:3000/read/<key>, it will fetch the specified key in the param,
 * and display the specific key from the JSON DB File as response.
 * If not, it will show appropriate Error
 */
route.route("/:key").get(Read.readSpecificData)

module.exports = route;