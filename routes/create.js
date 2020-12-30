const express = require('express');
const route = express.Router();
const { Create } = require('../controllers/crud')

/**
 * Create API
 * We can create a new key value pair by specifying http://localhost:3000/create and passing parameters as body
 * For Example:
 * {
 *    "key": {
 *              "name" : "raghavanandhan",
 *              "age" : "20",
 *              "ttl" : "20",   (20 Seconds)
 *              "timeSaved" : "1609231953521",
 *           }
 * }
 * This API will store the data in JSON DB File and sets the TTL Property to the Key-Value Pair if it is available
 * TTL --> Time To Live ===> It is a property which specifies the life time of the Key-Value Pair. After that time,
 * the Key-Value Pair won't be available for Read and Delete Operations. It is completely optional, It's users choice to set value
 * for the TTL Property. If not set, undefined value will be set for TTL Property.
 */
route.post('/', Create.createUser);

module.exports = route;