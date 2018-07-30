# To Do

This is a simple To Do application which allows to store tasks by categories.
The API side uses [Express](http://expressjs.com/) Framework with modules architecture.
The data is stored in in MongoDB using [mlab](https://mlab.com/) sandbox.
The remind functionality works using [agenda](https://www.npmjs.com/package/agenda) package. 
Also was used the fake SMTP server [mailtrap](https://mailtrap.io/) for keeping remind emails there.
It also uses the fake SMTP server ([mailtrap](https://mailtrap.io/)) for storing remind emails there.

## Run

Run `npm i && npm start` from root wil start both client and API.
