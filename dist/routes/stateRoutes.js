"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stateController_1 = require("../controllers/stateController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post('/states', auth_1.isAuthenticated, stateController_1.createState);
router.get('/states', stateController_1.getStates);
router.put('/states/:id', auth_1.isAuthenticated, stateController_1.updateState);
router.delete('/states/:id', auth_1.isAuthenticated, stateController_1.deleteState);
exports.default = router;
