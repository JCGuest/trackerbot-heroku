# >_trackerbot

This is a tool for keeping track of where you leave those little things that you don't use very often. It's a very simple interface that was a lot of fun to build. I designed it to look like an early and simple user interface of the 80's and to accomplish a very simple task. It is a Rails API style server for a React app that lives in the '/client' directory.  

### Prerequisites
ruby 2.6.5
rails (~> 5.2.4, >= 5.2.4.2)
BUNDLED WITH 2.1.2

### Deployment instructions
This git repo is designed to be deployed using the 'foreman' gem. After you clone and cd into the top level you can run `rake start`. This initiates comands in 'Procfile' that start the Rails server and deploy the React app as a proxy for the Rails API. It is not a true API in that it uses cookies for 'sessions_controller.rb' to login and validate users.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details
