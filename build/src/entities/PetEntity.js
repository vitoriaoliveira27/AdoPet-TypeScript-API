"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var EnumEspecie_1 = __importDefault(require("../enum/EnumEspecie"));
var AdotanteEntity_1 = __importDefault(require("./AdotanteEntity"));
var EnumPorte_1 = __importDefault(require("../enum/EnumPorte"));
var AbrigoEntity_1 = __importDefault(require("./AbrigoEntity"));
var PetEntity = /** @class */ (function () {
    function PetEntity(nome, especie, dataDeNascimento, adotado, porte) {
        this.nome = nome;
        this.especie = especie;
        this.porte = porte;
        this.dataDeNascimento = dataDeNascimento;
        this.adotado = adotado;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], PetEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PetEntity.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PetEntity.prototype, "especie", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], PetEntity.prototype, "porte", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], PetEntity.prototype, "dataDeNascimento", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], PetEntity.prototype, "adotado", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return AdotanteEntity_1.default; }, function (adotante) { return adotante.pets; }),
        __metadata("design:type", AdotanteEntity_1.default)
    ], PetEntity.prototype, "adotante", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return AbrigoEntity_1.default; }, function (abrigo) { return abrigo.pets; }),
        __metadata("design:type", AbrigoEntity_1.default)
    ], PetEntity.prototype, "abrigo", void 0);
    PetEntity = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, String, Date, Boolean, String])
    ], PetEntity);
    return PetEntity;
}());
exports.default = PetEntity;
