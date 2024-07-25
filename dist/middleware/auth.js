"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.isAuthenticated = void 0;
const passport_1 = __importDefault(require("passport"));
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
};
exports.isAuthenticated = isAuthenticated;
const login = (req, res, next) => {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err)
            return next(err);
        if (!user)
            return res.status(400).json({ message: 'Invalid credentials' });
        req.logIn(user, (err) => {
            if (err)
                return next(err);
            res.status(200).json({ message: 'Login successful' });
        });
    })(req, res, next);
};
exports.login = login;
const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
};
exports.logout = logout;
