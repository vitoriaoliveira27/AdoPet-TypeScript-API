"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tratarErroValidacaoYup = function (esquema, req, res, next) {
    try {
        esquema.validateSync(req.body, { abortEarly: false });
        next();
    }
    catch (erros) {
        var errosYup = erros;
        var errosDeValidacao_1 = {};
        errosYup.inner.forEach(function (erro) {
            if (erro.path) {
                errosDeValidacao_1[erro.path] = erro.message;
            }
        });
        res.status(400).json({ erros: errosDeValidacao_1 });
    }
};
exports.default = tratarErroValidacaoYup;
