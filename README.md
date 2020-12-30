FRESHWORKS BACKEND ASSIGNMENT

[![nodejsbadge](https://img.shields.io/badge/Made_With-NodeJS-red)](https://nodejs.org/en/) ![javascript](https://img.shields.io/badge/Contains-JavaScript-blue) ![crudapi](https://img.shields.io/badge/This_is_a-CRUD_API-green)
 - DONE BY: RAGHAVANANDHAN

ASSIGNMENT DETAILS:
This file contains code for

1. The JSON DB File named as 'data.json' will be created in the same project folder.

2. A new Key-Value pair can be added to the data store using the Create operation. The key is always a string - capped at 32chars. The value is always a JSON object - capped at 16KB.

3. If Create is invoked for an existing key, immediately error will be displayed.

4. A Read operation on a key can be performed by providing the key, and receiving the value in response, as a JSON object. If we provide "all", all the Key-Value pairs will be returned as JSON response.

5. A Delete operation can be performed by providing the key. As same in read operation, providing "all" will delete all the Key-Value pairs in the DB and reset to {}.

6. Every key supports setting a Time-To-Live property when it is created. This property is optional. If provided, it will be evaluated as an integer defining the number of seconds.

7. The key must be retained in the data store. Once the Time-To-Live for a key has expired, the key will no longer be available for Read or Delete operations.

8. If the key is called after the TTL has expired, appropriate error responses will be returned.

REPRODUCING THE PROJECT:

1. Install NodeJS in your system.

2. Clone this project using Git CLI.

3. In the project folder, open up the terminal and type "npm install".

4. All the necessary modules will be installed and you are ready to go.

5. Open the index.ejs in VS Code and Open it with Live Server.

6. In the terminal, start Node JS server by typing "npm start".

7. It will start the local server.

8. Then visit to the localhost url that is displayed in the console when we are starting the server.

9. We can both use our frontend or applications like POSTMAN, INSOMNIA to test our API.

10. CREATE API: http://localhost:3000/create and posting the Key-Value pair as a request body in FORM URL ENCODED MODE.

11. READ API: http://localhost:3000/read/:key will return the specified key value pair when we pass the key as an arguement in the place of ":key".
http://localhost:3000/read/all will return all the key value pairs that is stored in the JSON DB File.

12. DELETE API: http://localhost:3000/delete/:key will delete the specified Key Value pair from the JSON DB File when we pass the key as an argument in the place of ":key"
http://localhost:3000/delete/all will delete all the key value pairs in the JSON DB File and reset the DB File to {}.

13. All the APIs were exported as methods under their respective classes and we can make use of them by importing the Classes Create, Read, Delete.

14. Or You can simply use the FrontEnd by simply entering the url : http://localhost:3000/ and we can perform the Create, Read, Delete Operations there.

LIBRARIES IMPORTED : Express, Body-Parser, EJS.
