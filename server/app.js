// Подключим внешние зависимости из node_modules.
// Каждая библиотека возвращает некоторый объект через module.exports, точно так
// же, как мы это сделали в models.js. Функция require динамически находит
// модуль, исполняет его код и возвращает его module.exports нам.
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const config = require("./config.json")

const _ = require('lodash');
  
const connection = mysql.createConnection({
  host: config.dbhost,
  user: config.dbuser,
  database: config.database,
  password: config.dbpassword
});

class ToDOServer {
    constructor () {
        // Создаем наше Express-приложение.
        this.expressApp = express();
        this.attachRoutes();
    }

    attachRoutes () {
        let app = this.expressApp;
        // Создадим middleware для обработки JSON-тел запросов, т. е. функцию,
        // которая будет вызываться перед нашими обработчиками и обрабатывать
        // JSON в теле запроса, чтобы наш обработчик получил готовый объект.
        let jsonParser = bodyParser.json();

        // Назначаем функции-обработчики для GET/POST разных URL. При запросе на
        // указанный первым аргументом адрес, будут вызваны все функции,
        // которые переданы начиная со второго аргумента (их может быть сколько
        // угодно).
        // Важно обратить внимание на .bind - тут мы назначаем в качестве
        // обработчиков методы, а не функции. По сути, метод - это функция,
        // привязанная к объекту, что мы и делаем методом bind. Без него мы
        // получим неопределенный this, так как метод будет вызван как обычная
        // функция. Так следует делать всегда при передаче метода как аргумента.
        // Каждый обработчик принимает два аргумента - объекты запроса и ответа,
        // обозначаемые как req и res.
        
        app.get('/login', this.loginHandler.bind(this));
        app.post('/signup', jsonParser, this.signupHandler.bind(this));
        // Имя после двоеточия - параметр, принимающий произвольное значение.
        // Такие параметры доступны в req.params
        /*
        app.get('/tasks', this.tasksSearchHandler.bind(this));
        app.get('/rooms/:roomId/messages', this.getMessagesHandler.bind(this));
        app.post('/rooms/:roomId/messages', jsonParser, this.postMessageHandler.bind(this));
        */
    }

    loginHandler (req, res) {
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
    }

    signupHandler (req, res) {
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
    }

    // Обработчик создания комнаты
    createRoomHandler (req, res) {
        /*
        // Если нет обязательного поля name в JSON-теле - вернем 400 Bad Request
        if (!req.body.name) {
            res.status(400).json({});
        } else {
            // Создаем комнату в manager'e и вернем ее в виде JSON
            let room = this.manager.createRoom(req.body.name);
            let response = {
                room: room.toJson()
            };
            // Отправим ответ клиенту. Объект будет автоматически сериализован
            // в строку. Если явно не задано иного, HTTP-статус будет 200 OK.
            res.json(response);
        }
        */
    }

    getMessagesHandler (req, res) {
        /*
        // Получаем комнату по ID. Если комнаты нет - вернется undefined
        let room = this.manager.getById(req.params.roomId);

        // Проверка на то, нашлась ли такая комната
        if (!room) {
            // Если нет - 404 Not Found и до свидания
            res.status(404).json({});
        } else {
            // Преобразуем все сообщения в JSON
            let messagesJson = room.messages.map(message => message.toJson());
            let response = {
                messages: messagesJson
            };

            // Отправим ответ клиенту
            res.json(response);
        }
        */
    }

    postMessageHandler (req, res) {
        /*
        // Получаем комнату по ID
        let room = this.manager.getById(req.params.roomId);

        if (!room) {
            res.status(404).json({});
        } else if (!req.body.body || !req.body.username) {
            // Если формат JSON-сообщения некорректный - вернем 400 Bad Request
            res.status(400).json({});
        } else {
            // Создаем сообщение и возвращаем его клиенту
            let message = room.postMessage(req.body.body, req.body.username);
            let response = {
                message: message.toJson()
            };

            res.json(response);
        }
        */
    }

    roomSearchHandler (req, res) {
        /*
        // Получаем строку-фильтр из query-параметра searchString.
        // Если параметр не задан, то используем пустую строку, т. е.
        // будут найдены все комнаты
        let searchString = req.query.searchString || '';
        // Ищем комнаты и представляем их в виде JSON
        let rooms = this.manager.findByName(searchString);
        let roomsJson = rooms.map(room => room.toJson());
        let response = {
            rooms: roomsJson
        };

        // Отдаем найденное клиенту
        res.json(response);
        */
    }
}


// Экспортируем наш класс наружу
module.exports = ToDOServer;