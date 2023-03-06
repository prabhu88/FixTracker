import appModulePath from 'app-module-path';
import http from 'http';
import express from 'express';
import cors from 'cors';

import weather from './router'
var bodyParser = require('body-parser')
var async = require('async')
appModulePath.addPath(`${__dirname}`);

const Api = express();
async.waterfall([
    (callback)=>{
        Api.use(cors());
        Api.use(bodyParser.json({ limit: '50mb' }));
        Api.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        
        Api.get('/test', (req, res) => {            
            res.status(200).send('success!')
        });
        Api.use('/weather',weather);        
        Api.use('*', function (req, res) {
            res.status(404).send('Page Not Found');
            res.end();
        });
        callback(null, true);
    }
],(error,response) => {
    if(error){
        console.log(error)
    }
    else{
        const server = http.Server(Api);
        server.once('error', function(err) {
            if (err.code === 'EADDRINUSE') {
                console.log('port is used')
                server.close();
            }
        });
          
        server.once('listening', function() {            
            
        });
        server.listen(9001, () => {
            console.log('listening on *:9001');
        });
    }
})

