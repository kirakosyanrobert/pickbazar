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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneAddressResolver = void 0;
const TypeGraphQL = require("type-graphql");
const FindOneAddressArgs_1 = require("./args/FindOneAddressArgs");
const Address_1 = require("../../../models/Address");
let FindOneAddressResolver = class FindOneAddressResolver {
    async address(ctx, args) {
        return ctx.prisma.address.findOne(args);
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Address_1.Address, {
        nullable: true,
        description: undefined
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindOneAddressArgs_1.FindOneAddressArgs]),
    __metadata("design:returntype", Promise)
], FindOneAddressResolver.prototype, "address", null);
FindOneAddressResolver = __decorate([
    TypeGraphQL.Resolver(_of => Address_1.Address)
], FindOneAddressResolver);
exports.FindOneAddressResolver = FindOneAddressResolver;