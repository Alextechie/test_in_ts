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
const vitest_1 = require("vitest");
const __1 = require("..");
const supertest_1 = __importDefault(require("supertest"));
const db_1 = __importDefault(require("../__mock__/db"));
vitest_1.vi.mock("../__mock__/db", () => ({
    prisma: db_1.default
}));
(0, vitest_1.describe)("POST /sum", () => {
    (0, vitest_1.it)('should return sum of two numbers', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).post("/sum").send({
            a: 1,
            b: 2
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(3);
    }));
    // it('should throw an error for invalid inputs', async () => {
    //     const res = await request(app).post("/sum").send({
    //         a: ["232323"],
    //         b: "343343434343434"
    //     })
    //     expect(res.statusCode).toBe(411)
    //     expect(res.body.message).toBe("Incorrect inputs")
    // })
    (0, vitest_1.it)('should sum two negative numbers', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).post("/sum").send({
            a: -1,
            b: -2
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(-3);
    }));
    (0, vitest_1.it)('should sum a positive number with a negative number', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).post("/sum").send({
            a: 1,
            b: -2
        });
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(-1);
    }));
});
(0, vitest_1.describe)('GET /sum', () => {
    (0, vitest_1.it)('should return the sum of two numbers', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).get("/sum").set({
            a: "1",
            b: "2"
        }).send();
        (0, vitest_1.expect)(res.statusCode).toBe(200);
        (0, vitest_1.expect)(res.body.answer).toBe(3);
    }));
    (0, vitest_1.it)('should return a 411 if no inputs are provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(__1.app).get("/sum").send();
        (0, vitest_1.expect)(res.statusCode).toBe(411);
        (0, vitest_1.expect)(res.body.message).toBe("Incorrect inputs");
    }));
});
