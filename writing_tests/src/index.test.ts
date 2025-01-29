import {describe, expect, it, test} from "@jest/globals"
import { multiply, sum } from "."


describe('Add positive numbers', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('addition of two negative numbers', () => {
        const ans = sum(-1, -2)
        expect(ans).toBe(-3)
    })

    it('should add a positive and a negative number correctlt', () => {
        const final = sum(4 ,-2)
        expect(final).toBe(2)
    })
});

describe('multiply', () => {
    it('multiplies 2 * 3 to equal 6', () => {
        expect(multiply(2, 3)).toBe(6)
    })
})