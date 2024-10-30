"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaoEncontrado = exports.RequisicaoRuim = exports.ManipulaErros = void 0;
var EnumHttpStatusCode_1 = require("../enum/EnumHttpStatusCode");
var ManipulaErros = /** @class */ (function (_super) {
    __extends(ManipulaErros, _super);
    function ManipulaErros(message, statusCode) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
    }
    return ManipulaErros;
}(Error));
exports.ManipulaErros = ManipulaErros;
var RequisicaoRuim = /** @class */ (function (_super) {
    __extends(RequisicaoRuim, _super);
    function RequisicaoRuim(message) {
        return _super.call(this, message, EnumHttpStatusCode_1.EnumHttpStatusCode.BAD_REQUEST) || this;
    }
    return RequisicaoRuim;
}(ManipulaErros));
exports.RequisicaoRuim = RequisicaoRuim;
var NaoEncontrado = /** @class */ (function (_super) {
    __extends(NaoEncontrado, _super);
    function NaoEncontrado(message) {
        return _super.call(this, message, EnumHttpStatusCode_1.EnumHttpStatusCode.NOT_FOUND) || this;
    }
    return NaoEncontrado;
}(ManipulaErros));
exports.NaoEncontrado = NaoEncontrado;
