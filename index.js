//const ToDOServer = require('./server/app.js');
// JSON-файлы тоже можно подгружать через require!
const config = require('./server/config.json');


const express = require('express');
const https = require('https');
const http = require('http');
const app = express();
const cors = require('cors');
const router = express.Router();

const mysql = require("mysql2");

const _ = require('lodash');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: true});

const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
  }

const connection = mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    database: config.database,
    password: config.dbpassword
});

connection.connect(function(err){
    console.log({
        host: config.dbhost,
        user: config.dbuser,
        database: config.database,
        password: config.dbpassword
    });
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

  app.use(cors());
  //app.use(urlencodedParser);
  app.use(bodyParser.json());

//https.createServer(options, app).listen(443)


app.get('/login', (req, res) => {
    const sql = `SELECT * FROM users where email = "${req.body.email}" and password = "${req.body.password}"`;
    connection.query(sql,
        function(err, results, fields) {
            console.log(err);
            console.log(results); // собственно данные
            console.log(fields); // мета-данные полей
            if(!_.isEmpty(err)) {
                res.status(500).send("Login failed");
            }
            if(!_.isEmpty(results)) {
                res.status(200).send(results);
            } 
        });
        connection.end();
});

app.post('/signup', (req, res, next) => {
    try {
    console.log("сработало");
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);
    let id;
    connection.connect();
    connection.query(`select count(*) AS userscount from todolistserver.users`,
        function(err, results, fields) {
            console.log("ошибки" + err);
            console.log("данные" + results); // собственно данные
            //console.log(fields); // мета-данные полей
            if(!_.isEmpty(err)) {
                throw err;    
            }
            //if(!_.isEmpty(results)) {
                console.log("результаты " + results[0].userscount);
                id = (results[0].userscount + 1);
                console.log("ид " + id);
                res.locals.id = id;
                next();
           // } 
        });
   } catch(e) {
        console.log("ошибка" + e);
        res.status(500).send(e);
    }
}, (req, res) => {
    //try {
        console.log("ид второе" + res.locals.id);
        console.log(req.body);
        console.log(req.body.email);
        console.log(req.body.password);

        const sql = `INSERT INTO todolistserver.users (idusers, email, password) VALUES (${res.locals.id}, "${req.body.email}", "${req.body.password}")`;
        console.log("запрос" + sql);

        connection.connect();
        connection.query(sql,
        function(err, results, fields) {
            console.log("ошибки" + err);
            console.log("данные" + results); // собственно данные
            //console.log(fields); // мета-данные полей
            if(!_.isEmpty(err)) {
                throw err;
            }
            if(!_.isEmpty(results)) {
                res.status(200).send(results);
            } 
        });
        //connection.end();
    //} catch(e) {
    //    console.log("ошибка" + e);
    //    res.status(500).send(e);
    //}
});

app.listen(config.port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on http://localhost:${config.port}`)
})

/*
let app = new ToDOServer();
// Возьмем express-приложение и запустим HTTP-сервер. Настройки возьмем из
// конфига приложения. После того, как приложение начнет слушать порт,
// будет выполнена функция, переданная в качестве аргумента.
app.expressApp.attachRoutes();
app.expressApp.listen(config.port, config.host, function() {
    console.log(`App listening at port ${config.port}`);
});
*/

