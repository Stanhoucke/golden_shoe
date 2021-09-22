# Golden Shoe

An e-commerce website for a well-known British shoe company, Golden Shoe.  

The app uses:
* A React frontend, Spring Boot backend, and MongoDB database.
* The JUnit and Cypress testing suites for unit, integration, and end-to-end testing. 
* Postman for testing API endpoints.

[View the API Documentation](https://documenter.getpostman.com/view/17606355/UUxuiVcB)

## Database Set Up
The application uses MongoDB connected on port `27017`. Create a database called `golden_shoe` - collections will be seeded from the `DataLoader.java` file in the backend.

## Back End Installation
Run the Spring Boot application and tests.

```sh
cd backend
```
### Run Application
Execute the below file to run the application:
```sh
src/main/java/com/example/golden_shoe/GoldenShoeApplication.java
```  
The API runs on [http://localhost:8080](http://localhost:8080).  

[View the API Documentation](https://documenter.getpostman.com/view/17606355/UUxuiVcB) for more detail.

### Tests
Execute the below file to run the application tests:
```sh
src/test/java/com/example/golden_shoe/GoldenShoeApplicationTests.java
```
## Front End Installation
Install the dependencies and start the server.

```sh
cd frontend
npm install
npm start
```

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm run cypress`
Launches the Cypress testing tool. Frontend tests can be run by clicking the desired test in the UI.
