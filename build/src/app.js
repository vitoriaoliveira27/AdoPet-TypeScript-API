"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
require("reflect-metadata");
var dataSource_1 = require("./config/dataSource");
var erro_1 = require("./middleware/erro");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
app.get("/teste", function () {
    throw new Error("Erro teste");
});
app.use(erro_1.erroMiddleware);
dataSource_1.AppDataSource.initialize()
    .then(function () {
    console.log("Banco de dados conectado");
})
    .catch(function (erro) {
    console.log(erro);
});
exports.default = app;
