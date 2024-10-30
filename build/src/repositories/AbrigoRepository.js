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
var Endereco_1 = __importDefault(require("../entities/Endereco"));
var manipulaErros_1 = require("../utils/manipulaErros");
var AbrigoRepository = /** @class */ (function () {
    function AbrigoRepository(repository) {
        this.repository = repository;
    }
    AbrigoRepository.prototype.existeAbrigoComCelular = function (celular) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ where: { celular: celular } })];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    AbrigoRepository.prototype.existeAbrigoComEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ where: { email: email } })];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    AbrigoRepository.prototype.criaAbrigo = function (abrigo) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.existeAbrigoComCelular(abrigo.celular)];
                    case 1:
                        _a = (_b.sent());
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.existeAbrigoComEmail(abrigo.email)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            throw new manipulaErros_1.RequisicaoRuim("Já existe um abrigo com esse celular ou email!");
                        }
                        return [4 /*yield*/, this.repository.save(abrigo)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AbrigoRepository.prototype.listaAbrigos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbrigoRepository.prototype.atualizaAbrigo = function (id, newData) {
        return __awaiter(this, void 0, void 0, function () {
            var abrigoToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ where: { id: id } })];
                    case 1:
                        abrigoToUpdate = _a.sent();
                        if (!abrigoToUpdate) {
                            throw new manipulaErros_1.NaoEncontrado("Abrigo não encontrado!");
                        }
                        Object.assign(abrigoToUpdate, newData);
                        return [4 /*yield*/, this.repository.save(abrigoToUpdate)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AbrigoRepository.prototype.deletaAbrigo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var abrigoToRemove;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ where: { id: id } })];
                    case 1:
                        abrigoToRemove = _a.sent();
                        if (!abrigoToRemove) {
                            throw new manipulaErros_1.NaoEncontrado("Abrigo não encontrado!");
                        }
                        return [4 /*yield*/, this.repository.remove(abrigoToRemove)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AbrigoRepository.prototype.atualizaEnderecoAbrigo = function (idAbrigo, endereco) {
        return __awaiter(this, void 0, void 0, function () {
            var abrigo, novoEndereco;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { id: idAbrigo },
                        })];
                    case 1:
                        abrigo = _a.sent();
                        if (!abrigo) {
                            throw new manipulaErros_1.NaoEncontrado("Abrigo não encontrado!");
                        }
                        novoEndereco = new Endereco_1.default(endereco.cidade, endereco.estado);
                        abrigo.endereco = novoEndereco;
                        return [4 /*yield*/, this.repository.save(abrigo)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AbrigoRepository;
}());
exports.default = AbrigoRepository;
