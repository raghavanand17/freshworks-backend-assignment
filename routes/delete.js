const express = require('express');
const route = express.Router();
const { Delete } = require('../controllers/crud.js');

/**
 * If Path is specified as http://localhost:3000/delete/ without a key, 
 * it will throw us error or redirect to the correct path http://localhost:3000/delete/<key>
 * with the key parameter that passed in the query 
 * */

//USING GET
route.route('/').get(Delete.redirectUser);

//USING POST
route.route('/').post(Delete.redirectUser)

/**
 * When specified http://localhost:3000/delete/all, it will delete all the Key-Value Pairs in the JSON DB File,
 * and the JSON DB File is resetted to {}
 */
route.get('/all', Delete.deleteAllKeys)

/**
 * When specified http://localhost:3000/delete/<key>, it will delete the specified key in the param,
 * and removes the specific key from the JSON DB File
 */
route.route('/:key').get(Delete.deleteSpecificKey)

module.exports = route;