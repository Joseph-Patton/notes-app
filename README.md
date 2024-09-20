
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
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![Notes-app_Screenshot](https://github.com/user-attachments/assets/4b25b762-ab88-44ed-978b-a1345bff3a01)
Fullstack notes app with a postgres database, backend in rust and frontend in react with materialUI components.

## Key Features
* Take simple notes with title and content
* Add tags to notes to help keep them organised
* Sort by tags using the tab bar
* Search for notes using the search bar
* Dark/Light mode

## How To Use

This application can either be run in development setup or release setup.
For developement setup the postgres database is run in a docker container, with the backend and frontend run locally. This allows for a quick turnaround in making changes.
Release setup runs the database, backend and frontend in seperate docker containers using docker compose. This allows easier and reproducable setup and would be used if the application were to be deployed on a cloud provider.

To clone and run this application, you'll need [Docker](https://docs.docker.com/engine/install/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Joseph-Patton/notes-app.git

# Go into the repository
$ cd notes-app

# Run Docker Compose
$ docker compose up
```
The application should be running the database, the backend and the frontend as seperate docker containers...
Access the app on http://localhost:3000/

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## Download

You can [download](https://github.com/amitmerchant1990/electron-markdownify/releases/tag/v1.2.0) the latest installable version of Markdownify for Windows, macOS and Linux.

## Emailware

Markdownify is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <bullredeyes@gmail.com> about anything you'd want to say about this software. I'd really appreciate it!

## Credits

This software uses the following open source packages:

- [Placeholder](http://)

## Related

## Support

## You may also like...

## License

MIT

---
> GitHub [@josephpatton](https://github.com/joseph-patton) &nbsp;&middot;&nbsp;
