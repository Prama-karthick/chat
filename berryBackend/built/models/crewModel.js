"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrewModel = exports.CrewSchema = exports.membersSchema = void 0;
var mongoose_1 = require("mongoose");
exports.membersSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true }
});
exports.CrewSchema = new mongoose_1.Schema({
    CrewName: { type: String, required: true, unique: true },
    Members: { type: [exports.membersSchema], required: true },
    chats: { type: [String] }
}, {
    toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true
});
exports.CrewModel = (0, mongoose_1.model)('CrewCollections', exports.CrewSchema);
