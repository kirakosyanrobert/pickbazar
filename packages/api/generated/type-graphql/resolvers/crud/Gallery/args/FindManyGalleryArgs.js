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
exports.FindManyGalleryArgs = void 0;
const TypeGraphQL = require("type-graphql");
const GalleryOrderByInput_1 = require("../../../inputs/GalleryOrderByInput");
const GalleryWhereInput_1 = require("../../../inputs/GalleryWhereInput");
const GalleryWhereUniqueInput_1 = require("../../../inputs/GalleryWhereUniqueInput");
const GalleryDistinctFieldEnum_1 = require("../../../../enums/GalleryDistinctFieldEnum");
let FindManyGalleryArgs = class FindManyGalleryArgs {
};
__decorate([
    TypeGraphQL.Field(_type => GalleryWhereInput_1.GalleryWhereInput, { nullable: true }),
    __metadata("design:type", GalleryWhereInput_1.GalleryWhereInput)
], FindManyGalleryArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryOrderByInput_1.GalleryOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyGalleryArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => GalleryWhereUniqueInput_1.GalleryWhereUniqueInput, { nullable: true }),
    __metadata("design:type", GalleryWhereUniqueInput_1.GalleryWhereUniqueInput)
], FindManyGalleryArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyGalleryArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyGalleryArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GalleryDistinctFieldEnum_1.GalleryDistinctFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyGalleryArgs.prototype, "distinct", void 0);
FindManyGalleryArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyGalleryArgs);
exports.FindManyGalleryArgs = FindManyGalleryArgs;
