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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteState = exports.updateState = exports.getStates = exports.createState = void 0;
const State_1 = __importDefault(require("../models/State"));
const createState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        const newState = new State_1.default({
            name,
            description,
            status: 'new',
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 'unknown', // Assuming `req.user` is set by passport
        });
        const savedState = yield newState.save();
        res.status(201).json(savedState);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.createState = createState;
const getStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const states = yield State_1.default.find();
        res.status(200).json(states);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.getStates = getStates;
const updateState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const state = yield State_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(state);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.updateState = updateState;
const deleteState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield State_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: 'State deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.deleteState = deleteState;
