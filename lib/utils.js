/*jslint node: true */
'use strict';

var _   = require('underscore'),
    clc = require('cli-color');


var exports = module.exports = {};

var errorAndExit = exports.errorAndExit = function(errorMsg, errorObj, requestData){
    console.error(clc.red(errorMsg));
    if(errorObj){
        console.error(clc.red(JSON.stringify(errorObj, null, 4)));
    }
    process.exit(1);
};