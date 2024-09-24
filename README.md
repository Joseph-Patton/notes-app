
<h1 align="center">
  <br>
  <a href="https://github.com/Joseph-Patton">
<!--     <img src="" alt="Notes" width="200"></a> -->
  <br>
  Notes App Using Rust, React and Postgres
  <br>
</h1>

<h4 align="center">A browser based notes app inspired by the design of <a href="https://keep.google.com/" target="_blank">Google Keep</a>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#release-setup">Release Setup</a> •
  <a href="#development-setup">Development Setup</a> •
</p>

![Notes-app_Screenshot](https://github.com/user-attachments/assets/4b25b762-ab88-44ed-978b-a1345bff3a01)
Fullstack note taking app with a React frontend, Rust REST web-server backend and Postgres database.

## Key Features
* Take simple notes with a title and content
* Add tags to notes to help keep them organised
* Sort by tags using the tab bar
* Search for notes using the search bar
* Dark/Light mode

## Setup

This application can either be run in release or development setup.

## Release Setup
Release setup runs the frontend, backend and database in seperate Docker Containers using Docker Compose. This allows for an easier and reproducable setup (and would be the setup used if the application were to be deployed on a cloud provider).

To clone and run this application, you'll need [Docker](https://docs.docker.com/engine/install/) installed on your computer. From your command line run:

```bash
# Clone this repository
$ git clone https://github.com/Joseph-Patton/notes-app.git

# Go into the repository
$ cd notes-app

# Run Docker Compose
$ docker compose up
```
The frontend, backend and database should now be running as seperate Docker Containers.
Access the app on http://localhost:3000/

## Development Setup
The backend and frontend are run locally with the database run as a Docker Container. This allows for a quick turnaround for making changes during development.
```bash
# Clone this repository
$ git clone https://github.com/Joseph-Patton/notes-app.git

# Go into the root directory of the repository
$ cd notes-app
```
#### Run Database
You'll need [Docker](https://docs.docker.com/engine/install/) installed on your computer. From the root directory of the project run from your command line:
```bash
# Run the Postgres database in a Docker Container
$ ./docker-entrypoint-initdb.d/init_db.sh
```
By default this will be run on port 5432. This is configured in notes-app/docker-entrypoint-initdb.d/init_db.sh.  
The port the backend expects to find the database in configured in backend/configuration/base.yaml  
If the Docker Container database has already been created and you need to update the database with migrations run:
```bash
# Skip creation of Docker Container and update existing database with migrations
$ SKIP_DOCKER=true ./docker-entrypoint-initdb.d/init_db.sh
```
### Run Backend
You'll need [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) installed on you computer. From the root of the project run the foloowing commands:
```bash
#
$ cd backend/
$ cargo run
```
The backend will be run on port 8000 by default, this can be configured in notes-app/backend/configuration/base.yaml.  
The port the frontend expects to find the backend is set by the apiURL variable in frontend/src/App.js. (This should be refactory out as a configuration variable in the future).  

### Run Frontend
You'll need [npm](https://nodejs.org/en/download/package-manager) installed on you computer. From the root of the project run the following commands:
```bash
#
$ cd frontend/
$ npm config set legacy-peer-deps true
$ npm install
$ npm start
```
The default port is 3000 so the app can be accessed at http://localhost:3000/  
note: running 'npm config set legacy-peer-deps true' is to ignore a dependency conflict that will prevent 'npm install' installing packagaes correctly. The dependency conflict is non-breaking so this fix works fine (but ideally a better resolution should be found).

---
> GitHub [@josephpatton](https://github.com/joseph-patton) &nbsp;&middot;&nbsp;
