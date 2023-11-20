"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    crewman: { type: Boolean, required: true },
    gender: { type: String, required: true },
    online: { type: Boolean, required: true },
    crews: { type: [String] },
    expiresIn: { type: Number },
}, {
    toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true
});
exports.UserModel = (0, mongoose_1.model)('UserCollections', exports.UserSchema);
