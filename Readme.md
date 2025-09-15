# Everthing about this project including some extra info

This is the base node js project template , which anyone can use as it has been prepared , by keeping some of the most important code principles and project management recommendations. Feel free to change anything if it is required.


`src` -> Inside the src folder all the actula code reagrding the project will resides.This will not includes any kind of test (you might want to make seperate test folder)

Lets take a look inside the `src` folder :
- `config` -> In this folder  anythings and everythings reagrding any config  setup of a library or module will be done. For example : setting up `dotenv` so that we can use the environments  variables anywhere in a cleaner fashion , this is done in a `serverConfig.js`. One more example can be setup your logging library that can help you to prepare meaningful log , so config for this library should also be done here.

- `routes` -> In this folder we are registering the routes to its corresponding controllers and middlewares.
- `middlewares` -> They are just going to intercept the incoming request where we can write our validators , authenticators , etc.

- `controllers` -> They are kind of the last middlewares as post them you call your business layer(service file) to execute the business layer . In controllers we just recieve incoming request and data and then pass it to the business layer , and once business layer returns an output , we structure the API response in controllers and send the  output .

- `repositories` -> This folder contains all the logic using which we interact the DB by writing queries.All the raw/ORM queries will go there.
- `services` ->  contains the business logic and interact with repositories for data from the database.
- `utils` -> it contains all the utility file eg; helper methods , error classes , etc.


## Something about --save
```txt
npm will --save by default now.
Additionally package-lock.json will be automatically created unless an npm-srinkwrap.json exists.
 ```

#### For every folder (eg. routes , utils) we are creating a file index.js which can manage the import exports things so that in main index.js file we can able to maintian the code simplicity , easy to understand , etc;

```txt
In node > 16.0 version you do not need to download nodemon to watch the files
you can use `node --watch index.js`  to  watch your cod
```

```txt
File Name must be all lowercase and may includes underscores (_) or dashes(-) but no additional puncutation.follow the convention that your project uses Filenames extension must be .js
``` 

### Winston Package
```txt
A logger for just about everything
It is used to log all the errors , etc for better debugging
```


### ORM (Object Relational Mapping)
```txt
is a technique used in creating a "bridge" between oop and in most cases relational db.
In this project we are using `Sequelize ORM` with MYSQL DB , and also you need to install `driver` which can tell to the sequlizer that which type of db i am using.
You'll also have to manually install the driver for your database (in this project we are using MYSQL)
The underlying connector library used by Sequelize for MySQL is the mysql2 npm package.
Do not push the src/config/config.json file inside the github
make sure it should be mention in the .gitignore file
``` 

### Setup this project
- Download the template from github and open it in your fav IDE.
- In the root directory create a `.env` file and add the following env variables.

```
        PORT = <port number your choice>

```
- Inside the src/config folder create a config.json file and write the following code:
```
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "airline_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- If you are setting up your dev environment , then write the usernaame , password and in dialect writ `mysql`(what db you want to use mention it there).
- If you are setting up with the test/prod then make sure the username , pswd , dialect , host should be related to that configuration.


### How to init Sequelize ORM in this project
```JS
npm install --save sequelize // ORM
npm install --save mysql2 // Driver
npm i sequelize-cli // to do most of the things easily 

```
