# Everthing about this project including some extra info

## Something about --save
```txt
npm will --save by default now.
Additionally package-lock.json will be automatically created unless an npm-srinkwrap.json exists.
 ```

#### For every folder (eg. routes , utils) we are creating a file index.js which can manage the import exports things so that in main index.js file we can able to maintian the code simplicity , easy to understand , etc;

```txt
In node > 16.0 version you do not need to download nodemon to watch the files
you can use `node --watch index.js`  to  watch your code
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
In this project we are using `Sequelize ORM` with MYSQL DB
You'll also have to manually install the driver for your database (in this project we are using MYSQL)
``` 
### How to init Sequelize ORM in this project
```JS
npm install --save sequelize
npm install --save mysql2


```
