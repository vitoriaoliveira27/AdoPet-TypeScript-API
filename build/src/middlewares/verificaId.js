"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaIdMiddleware = void 0;
var manipulaErros_1 = require("../utils/manipulaErros");
var verificaIdMiddleware = function (req, res, next) {
    var params = __assign({}, req.params);
    for (var param in params) {
        if (!Number.isInteger(Number(params[param]))) {
            throw new manipulaErros_1.RequisicaoRuim("O par\u00E2metro ".concat(param, " deve ser um n\u00FAmero inteiro"));
        }
    }
};
exports.verificaIdMiddleware = verificaIdMiddleware;
