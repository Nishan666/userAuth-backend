# User Auth api

User authentication api with login ,signup , edit user detail and remove user. with jwt authentication.

---
## Requirements

*   nodejs installed
*   postman (to send api request)
*   mongoDB atlas or (to work locally use studio 3t or mongodb compass)

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

## Install

    $ git clone https://github.com/Nishan666/userAuth-backend.git
    $ cd userAuth-backend
    $ npm i


## Running the project

    $ node server.js 
    or
    $ nodemon server.js

## In postman

*   SignUp user **/signup**
    *   username 
    *   password 
    *   name 
    *   age 
    *   email 
*   Login user **/login**
    *   username
    *   password
*   Update user **/update**
    *   name
    *   age
    *   email
    *   *   auth token
*   Remove user **/delete**
    *   *   auth token

