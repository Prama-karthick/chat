"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var LOCAL_DB_CON = "mongodb://127.0.0.1:27017/chat";
var GLOBAL_DB_CON = "mongodb+srv://pramakarthick:Crewman@okayberry.byt8wo6.mongodb.net/?retryWrites=true&w=majority";
var dbConnect = function () {
    (0, mongoose_1.connect)(GLOBAL_DB_CON, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log("connected successful"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
