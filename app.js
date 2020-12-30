const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

//Routes for CREATE, READ and DELETE APIs.
const create = require('./routes/create')
const routes = require('./routes/read')
const deletes = require('./routes/delete')

const { renderIndexPage, rewriteJSONFile } = require('./controllers/crud');

//Setting View Engine for Rendering Pages
app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

/**
 * Create API
 * We can create a new key value pair by specifying http://localhost:3000/create
 * and we can pass the Key-Value as a body to the API and it will create a JSON Object and store it in the JSON DB File.
 */
app.use('/create', create)

/**
 * Read API
 * We can read the key value pair by specifying http://localhost:3000/read/<key>
 * Or We can list all the key value pair available by specifying http://localhost:3000/read/all
 */
app.use('/read', routes);

/**
 * Delete API
 * We can delete the key value pair by specifying http://localhost:3000/delete/<key>
 * Or We can delete all the key value pairs and reset the JSON back to {} by specifying http://localhost:3000/delete/all
 */
app.use('/delete', deletes)

//For Getting the Index Page Defaultly - Using GET
app.get('/', renderIndexPage);

//For Getting the Index Page Defaultly - Using POST
app.post('/', renderIndexPage)

//Get the JSON File from FrontEnd and rewriting the JSON DB File
app.post('/send', rewriteJSONFile)

//Listening to the App Server
app.listen(PORT, () => {
    console.log(`Server is listening on the port http://localhost:${PORT}/` )
});