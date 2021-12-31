# CvVisualizer

**Unfinished, will be continued when other projects with higher priority are done**

### Heroku: https://secret-atoll-72204.herokuapp.com/

## Description
- - -
Main purpose of project was try to handle state management with Redux. Concept of application is "mini LinkedIn", which contains map where people can add workplaces and work experiences.

## Essential dependencies and frameworks
- - -

### Front

- npm
- React
- TypeScript
- Redux
- OpenLayers
- VisJs-libraries
- Bootstrap

### Backend

- Maven
- Spring boot
- Java
- (PostgreSQL) + Hibernate
<br></br>
## Starting application
- - -

### Develop

Client folder is located ```src/main/client```. Executing ```npm install && npm start``` should start client's dev server by default on port 3000. Main class of Spring application is located ```src/main/java/com/main/cv/CvApplication.java``` Executing it will start dev server on backend. Default port is 8080.

### Local production
Executing ```mvn clean install``` will create .jar file, which will wrap client and server. This -jar file can be run from root folder with command ```java -jar target/cv-0.0.1-SNAPSHOT.jar``` or run ```sh start.sh```