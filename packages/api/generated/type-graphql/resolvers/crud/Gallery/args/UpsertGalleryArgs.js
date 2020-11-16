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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertGalleryArgs = void 0;
const TypeGraphQL = require("type-graphql");
const GalleryCreateInput_1 = require("../../../inputs/GalleryCreateInput");
const GalleryUpdateInput_1 = require("../../../inputs/GalleryUpdateInput");
const GalleryWhereUniqueInput_1 = require("../../../inputs/GalleryWhereUniqueInput");
let UpsertGalleryArgs = class UpsertGalleryArgs {
};
__decorate([
    TypeGraphQL.Field(_type => GalleryWhereUniqueInput_1.GalleryWhereUniqueInput, { nullable: false }),
    __metadata("design:type", GalleryWhereUniqueInput_1.GalleryWhereUniqueInput)
], UpsertGalleryArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryCreateInput_1.GalleryCreateInput, { nullable: false }),
    __metadata("design:type", GalleryCreateInput_1.GalleryCreateInput)
], UpsertGalleryArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryUpdateInput_1.GalleryUpdateInput, { nullable: false }),
    __metadata("design:type", GalleryUpdateInput_1.GalleryUpdateInput)
], UpsertGalleryArgs.prototype, "update", void 0);
UpsertGalleryArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertGalleryArgs);
exports.UpsertGalleryArgs = UpsertGalleryArgs;