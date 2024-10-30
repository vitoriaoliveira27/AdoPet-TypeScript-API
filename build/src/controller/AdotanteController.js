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
var AdotanteEntity_1 = __importDefault(require("../entities/AdotanteEntity"));
var AdotanteController = /** @class */ (function () {
    function AdotanteController(repository) {
        this.repository = repository;
    }
    AdotanteController.prototype.criaAdotante = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, celular, endereco, foto, senha, novoAdotante;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, nome = _a.nome, celular = _a.celular, endereco = _a.endereco, foto = _a.foto, senha = _a.senha;
                        novoAdotante = new AdotanteEntity_1.default(nome, senha, celular, foto, endereco);
                        return [4 /*yield*/, this.repository.criaAdotante(novoAdotante)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res
                                .status(201)
                                .json({ dados: { id: novoAdotante.id, nome: nome, celular: celular, endereco: endereco } })];
                }
            });
        });
    };
    AdotanteController.prototype.atualizaAdotante = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.atualizaAdotante(Number(id), req.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(204)];
                }
            });
        });
    };
    AdotanteController.prototype.listaAdotantes = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var listaDeAdotantes, dados;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.listaAdotantes()];
                    case 1:
                        listaDeAdotantes = _a.sent();
                        dados = listaDeAdotantes.map(function (adotante) {
                            return {
                                id: adotante.id,
                                nome: adotante.nome,
                                celular: adotante.celular,
                                endereco: adotante.endereco !== null ? adotante.endereco : undefined,
                            };
                        });
                        return [2 /*return*/, res.json({ dados: dados })];
                }
            });
        });
    };
    AdotanteController.prototype.deletaAdotante = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.deletaAdotante(Number(id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(204)];
                }
            });
        });
    };
    AdotanteController.prototype.atualizaEnderecoAdotante = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.repository.atualizaEnderecoAdotante(Number(id), req.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.sendStatus(204)];
                }
            });
        });
    };
    return AdotanteController;
}());
exports.default = AdotanteController;
