"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbrigoEntity_1 = __importDefault(require("../entities/AbrigoEntity"));
var EnumHttpStatusCode_1 = require("../enum/EnumHttpStatusCode");
var AbrigoController = /** @class */ (function () {
    function AbrigoController(repository) {
        this.repository = repository;
    }
    AbrigoController.prototype.criaAbrigo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, celular, email, senha, endereco, novoAbrigo, teste;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, nome = _a.nome, celular = _a.celular, email = _a.email, senha = _a.senha, endereco = _a.endereco;
                        novoAbrigo = new AbrigoEntity_1.default(nome, celular, email, senha, endereco);
                        return [4 /*yield*/, this.repository.criaAbrigo(novoAbrigo)];
                    case 1:
                        teste = _b.sent();
                        console.log(teste);
                        return [2 /*return*/, res
                                .status(201)
                                .json({ dados: { id: novoAbrigo.id, nome: nome, celular: celular, email: email, endereco: endereco } })];
                }
            });
        });
    };
    AbrigoController.prototype.listaAbrigos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listaDeAbrigos, dados;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.listaAbrigos()];
                    case 1:
                        listaDeAbrigos = _a.sent();
                        dados = listaDeAbrigos.map(function (abrigo) {
                            return {
                                id: abrigo.id,
                                nome: abrigo.nome,
                                celular: abrigo.celular,
                                email: abrigo.email,
                                endereco: abrigo.endereco !== null ? abrigo.endereco : undefined,
                            };
                        });
                        return [2 /*return*/, res.status(EnumHttpStatusCode_1.EnumHttpStatusCode.OK).json({ dados: dados })];
                }
            });
        });
    };
    AbrigoController.prototype.atualizaAbrigo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.atualizaAbrigo(Number(id), req.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(EnumHttpStatusCode_1.EnumHttpStatusCode.NO_CONTENT)];
                }
            });
        });
    };
    AbrigoController.prototype.deletaAbrigo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.deletaAbrigo(Number(id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(EnumHttpStatusCode_1.EnumHttpStatusCode.NO_CONTENT)];
                }
            });
        });
    };
    AbrigoController.prototype.atualizaEnderecoAbrigo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.atualizaEnderecoAbrigo(Number(id), req.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(EnumHttpStatusCode_1.EnumHttpStatusCode.OK)];
                }
            });
        });
    };
    return AbrigoController;
}());
exports.default = AbrigoController;
