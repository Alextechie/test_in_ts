import {describe, expect, it, test} from "@jest/globals"
import request from "supertest";
import { app } from "..";


describe('POST /sum', () => {
    it('should return the sum of two numbers', async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.ans).toBe(3)
    })

    it('should return the sum of negative numbers correctly', async () => {
        const res = await request(app).post("/sum").send({
            a: -1,
            b: -2
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.ans).toBe(-3)
    })

})


describe('POST /multiply',  () => {
    it('should multiply two positve numbers', async () => {
        const res = await request(app).post("/multiply").send({
            a: 2,
            b: 3
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(6)
    })

    it('should multiply two negative numbers', async () => {
        const res = await request(app).post("/multiply").send({
            a: -2,
            b: -3
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(6)
    })


    it('should multiply one positive number with one negative num', async () => {
        const res = await request(app).post("/multiply").send({
            a: -2,
            b: 3
        })

        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(-6)
    })
})