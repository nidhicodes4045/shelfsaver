# shelfsaver
HackNC State '25
# Dependencies
- [Java JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Maven](https://maven.apache.org/)
- [Vite](https://vite.dev/)
- [React v19](https://react.dev/)
# How to Run Project
First, start running the Spring Boot application, which serves as the backend for the project.

To build the project, navigate to /shelfsaver-backend and run:
```
mvn clean install
```
Then, to run the built project, run:
```
mvn spring-boot:run
```
Use ```Ctrl + C``` to stop running the application.

Go to ```localhost:8080``` to see the served content from Spring Boot, including API endpoints!

Next, run the React application, which serves as the frontend for the project.

Navigate to /shelfsaver-frontend and run:
```
npm run dev
```
Use ```Ctrl + C``` to stop running the dev server.

Go to ```http://localhost:5173/``` to see the webpgae!
# Asset Credits
[Wizard stock image](https://pngimg.com/image/104822)
