(() => {
    'use strict';

    const express = require('express');
    const parser  = require('body-parser');
    const server  = express();

    server.use(parser.json());
    server.use(parser.urlencoded({
    	extended: true
    }));

    server.get('/', (req, res) => {
        res.send('<h1 style="text-align:center">What up from Node!?!</h1>');
    });

    server.get('/api/v1/:name', (req, res) => {
        var payload = {
            name: req.params.name
        };

        res.send(payload);
    });

    server.post('/api/v1/trains', (req, res) => {
        var payload = {
            name: req.body.name,
            time: req.body.time,
            from: 'express'
        };

        console.log('responded to a request from ' + req.body.from);

        res.send(payload);
    });

    server.listen('4567', () => {
        console.log('up & running @ http://localhost:4567');
    });
})();
