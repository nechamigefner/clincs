
## About the app
This is a project to manage a database of HMO members that contains personal details as well as details about the corona virus
Actually, there are two separate apps:
1. A client server that serves the FrontEnd using React.
2. An API server that serves the backend using Node.js/Express
3. A database to store the data using MongoDB.

## Client Folder Structure
```
client/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    index.html
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    components/
      GetPatientById.js
      PatientForm.css
      PatientForm.js
      patientPopup.js
    tools/
      validation.js
``` 

## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

Enjoy!
