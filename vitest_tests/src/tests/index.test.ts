import {expect, it, describe, vi} from "vitest";
import { app } from "..";
import request from "supertest"
import { prisma } from "../db";

vi.mock("../db", () => ({
    prisma: {sum : {create: vi.fn()}}
}))
describe("POST /sum", () => {
    it('should return sum of two numbers', async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })

        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(3)
    })

    // it('should throw an error for invalid inputs', async () => {
    //     const res = await request(app).post("/sum").send({
    //         a: ["232323"],
    //         b: "343343434343434"
    //     })

    //     expect(res.statusCode).toBe(411)
    //     expect(res.body.message).toBe("Incorrect inputs")
    // })

    it('should sum two negative numbers', async () => {
        const res = await request(app).post("/sum").send({
            a: -1,
            b: -2
        })

        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(-3)
    })

    it('should sum a positive number with a negative number', async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: -2
        })

        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(-1)
    })
})


describe('GET /sum', () => {
    it('should return the sum of two numbers', async () => {
        const res = await request(app).get("/sum").set({
            a: "1",
            b: "2"
        }).send()

        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(3)
    })

    it('should return a 411 if no inputs are provided', async ()  => {
        const res = await request(app).get("/sum").send()
        expect(res.statusCode).toBe(411)
        expect(res.body.message).toBe("Incorrect inputs")
    })
})