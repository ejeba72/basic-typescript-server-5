"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Router, Request, Response } from 'express';
const express_1 = __importDefault(require("express"));
const dev_controller_1 = __importDefault(require("../controllers/dev.controller"));
// const router = Router();
const router = express_1.default.Router();
// router.get('/', (req: Request, res: Response) => {
router.get('/', dev_controller_1.default);
exports.default = router;
