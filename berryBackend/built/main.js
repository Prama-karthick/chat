"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var dbconfig_1 = require("./dbconfig");
var cors_1 = __importDefault(require("cors"));
var express_2 = require("express");
var userrouter_1 = __importDefault(require("./routers/userrouter"));
var body_parser_1 = __importDefault(require("body-parser"));
var router = (0, express_2.Router)();
var crewrouter_1 = __importDefault(require("./routers/crewrouter"));
dotenv_1.default.config();
(0, dbconfig_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// app.get('/',(req,res) => {
//   res.send("start world");
// })
var global = "https://okayberry.onrender.com/";
var local = "http://localhost:4200/";
app.use((0, cors_1.default)({
    credentials: true,
    origin: [global]
}));
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("server connected to ", port);
});
app.use("/api/users", userrouter_1.default);
app.use("/api/crew", crewrouter_1.default);
app.use(express_1.default.static('public'));
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(___dirname, 'public', 'index.html'));
});
