"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dataSource_1 = require("../config/dataSource");
var AbrigoController_1 = __importDefault(require("../controller/AbrigoController"));
var AbrigoRepository_1 = __importDefault(require("../repositories/AbrigoRepository"));
var enderecoRequestBody_1 = require("../middleware/validadores/enderecoRequestBody");
var verificaId_1 = require("../middleware/verificaId");
var abrigoRequestBody_1 = require("../middleware/validadores/abrigoRequestBody");
var router = express_1.default.Router();
var abrigoRepository = new AbrigoRepository_1.default(dataSource_1.AppDataSource.getRepository("AbrigoEntity"));
var abrigoController = new AbrigoController_1.default(abrigoRepository);
var validateAbrigoBody = function (req, res, next) {
    return (0, abrigoRequestBody_1.middlewareValidadorBodyAbrigo)(req, res, next);
};
var validateEnderecoBody = function (req, res, next) {
    return (0, enderecoRequestBody_1.middlewareValidadorBodyEndereco)(req, res, next);
};
router.post("/", validateAbrigoBody, function (req, res) {
    return abrigoController.criaAbrigo(req, res);
});
router.get("/", function (req, res) { return abrigoController.listaAbrigos(req, res); });
router.put("/:id", verificaId_1.verificaIdMiddleware, function (req, res) {
    return abrigoController.atualizaAbrigo(req, res);
});
router.delete("/:id", verificaId_1.verificaIdMiddleware, function (req, res) {
    return abrigoController.deletaAbrigo(req, res);
});
router.patch("/:id", verificaId_1.verificaIdMiddleware, validateEnderecoBody, function (req, res) {
    return abrigoController.atualizaEnderecoAbrigo(req, res);
});
exports.default = router;
