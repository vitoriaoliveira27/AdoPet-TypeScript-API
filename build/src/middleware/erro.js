"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erroMiddleware = void 0;
var EnumHttpStatusCode_1 = require("../enum/EnumHttpStatusCode");
var erroMiddleware = function (erro, req, res, next) {
    var _a;
    var statusCode = (_a = erro.statusCode) !== null && _a !== void 0 ? _a : EnumHttpStatusCode_1.EnumHttpStatusCode.INTERNAL_SERVER_ERROR;
    var mensagem = erro.statusCode ? erro.message : "Erro interno do servidor";
    res.status(statusCode).json({ mensagem: mensagem });
    return next();
};
exports.erroMiddleware = erroMiddleware;
