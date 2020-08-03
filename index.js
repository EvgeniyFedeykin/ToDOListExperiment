//const ToDOServer = require('./server/app.js');
// JSON-файлы тоже можно подгружать через require!
const config = require('./server/config.json');

const express = require('express');
const https = require('https');
const http = require('http');
const app = express();

//https.createServer(options, app).listen(443)


app.get('/login', (req, res) => {
    const sql = `SELECT * FROM users where email = ${req.body.email} and password = ${req.body.password}`;
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

app.post('/signup', (req, res) => {
    const sql = `INSERT INTO users values(${req.body.email, req.body.password})`;
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

app.listen(config.port, config.host, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${config.port}`)
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

