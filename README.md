# >_trackerbot

This is a tool for keeping track of where you leave those little things that you don't use very often. It's a very simple interface that was a lot of fun to build. I designed it to look like an early and simple user interface of the 80's and to accomplish a very simple task. It is a Rails API style server for a React app that lives in the '/client' directory.  
<br>
Some of the features of this project-<br>
*client-side routing<br>
*'redux' and 'thunk' to manage and dispatch to state <br>
*Rails session and user authentication via API<br>
*audible user confirmations
*both presentational and function components<br>
*hot reloading deployment of both servers for developement

### Prerequisites
ruby 2.6.5
<br>rails (~> 5.2.4, >= 5.2.4.2)
<br>BUNDLED WITH 2.1.2

### Deployment instructions
This git repo is designed to be deployed using the 'foreman' gem. In the top level directory you can run `rake start`. This initiates comands in 'Procfile' that start the Rails server and deploy the React app as a proxy for the Rails API. It is not a true API in that it uses cookies for 'sessions_controller.rb' to login and validate users.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details
