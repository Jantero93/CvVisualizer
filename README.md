# CvVisualizer

## Project is unfinished, it will be continued when there is not other projects around

### Heroku: https://secret-atoll-72204.herokuapp.com/

## Description
- - -
Which project should be only for testing Redux with TS. Main idea was make "mini LinkedIn", where is map where people can add workingplaces and work experiences. Project has been expansing and there is no sight of end...

## Essential Dependenices
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
- Srping boot
- Java
- PostgreSQL + Hibernate

## Starting dev mode

### Client
Folder is located ```server/src/main/client``` executing ```npm install && npm start``` should start client's dev server by default on port 3000

### Server
Main class is located ```server/src/main/java/com/main/cv/CvApplication.java``` where running main class will start dev server on backend

### Local production mode
Executing ```mvn clean install``` will create .jar file, which will wrap client and server. This -jar file can be run from server folder with command ```java -jar target/cv-0.0.1-SNAPSHOT.jar```
