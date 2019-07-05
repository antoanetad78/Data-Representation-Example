This project uses MongoDB as a persistent data store. Installed MongoDB is assumed.
Before starting the project for the first time, please run the following scripts:

1. In the root directory of the project, please run:

###`npm install`

2. To seed the data into the database, in the root directory of project, please run:

### `npm run seed`

3. In the client/ directory, please run:

### `npm install`

4. To start the app, please run:

### `npm run dev`

Runs the app (server and client concurrently) in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The server listens on port 3001.

5. The database is created by the "seed" script and populated with the data from the dataset.csv file provided. Please, keep the csv file in the root directory of the project. The "seed" script automatically populates the database with a single collection called "sample", that contains 2000 documents ( corresponding to the 2000rows of the .csv file), each with 201 fields - an \_id and 200 variables, corresponding to the 200 variables in the .csv file.
