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
var express_1 = require("express");
var router = (0, express_1.Router)();
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var crewModel_1 = require("../models/crewModel");
var userModel_1 = require("../models/userModel");
router.post("/createcrew", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, crewname, Members, userfound, count, crew, i, newcrew, Ur;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, crewname = _a.crewname, Members = _a.Members;
                count = 0;
                return [4 /*yield*/, crewModel_1.CrewModel.findOne({ CrewName: crewname })];
            case 1:
                crew = _b.sent();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < Members.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, userModel_1.UserModel.findOne({ email: Members[i].mail })];
            case 3:
                userfound = _b.sent();
                if (userfound) {
                    count += 1;
                }
                _b.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                if (!crew) return [3 /*break*/, 6];
                res.json({ msg: -1 });
                return [3 /*break*/, 9];
            case 6:
                if (!(count !== Members.length)) return [3 /*break*/, 7];
                res.json({ msg: -2 });
                return [3 /*break*/, 9];
            case 7:
                newcrew = {
                    id: '',
                    CrewName: crewname,
                    Members: Members,
                    chats: ['']
                };
                return [4 /*yield*/, crewModel_1.CrewModel.create(newcrew)];
            case 8:
                Ur = _b.sent();
                res.send(Ur);
                _b.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); }));
router.post("/opencrew", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, cname, mail, crew, groupmembers, user, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, cname = _a.cname, mail = _a.mail;
                return [4 /*yield*/, crewModel_1.CrewModel.findOne({ CrewName: cname })];
            case 1:
                crew = _b.sent();
                if (!!crew) return [3 /*break*/, 2];
                res.json({ msg: -1 });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, crewModel_1.CrewModel.findOne({ CrewName: cname }, { Members: 1, _id: 0 })];
            case 3:
                groupmembers = _b.sent();
                user = void 0;
                if (groupmembers) {
                    for (i = 0; i < groupmembers.Members.length; i++) {
                        if (mail == groupmembers.Members[i].mail) {
                            user = groupmembers.Members[i];
                        }
                    }
                }
                if (user) {
                    res.send(crew);
                }
                else {
                    res.json({ msg: -2 });
                }
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); }));
router.post("/getchats", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cname, crew, previouschat;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cname = req.body.cname;
                return [4 /*yield*/, crewModel_1.CrewModel.findOne({ CrewName: cname })];
            case 1:
                crew = _a.sent();
                if (!crew) {
                    res.json({ msg: -1 });
                }
                else {
                    previouschat = crew.chats;
                    res.send(previouschat);
                }
                return [2 /*return*/];
        }
    });
}); }));
router.post("/chatnow", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, crewname, nmessage, crew, messages;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, crewname = _a.crewname, nmessage = _a.nmessage;
                return [4 /*yield*/, crewModel_1.CrewModel.findOne({ CrewName: crewname })];
            case 1:
                crew = _b.sent();
                if (!!crew) return [3 /*break*/, 2];
                res.json({ msg: -1 });
                return [3 /*break*/, 4];
            case 2:
                messages = crew.chats;
                messages.push(nmessage);
                crew.chats = messages;
                return [4 /*yield*/, crew.save()];
            case 3:
                _b.sent();
                res.send(crew);
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
