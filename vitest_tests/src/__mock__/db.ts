import { PrismaClient } from "@prisma/client";
import {mockDeep, mockReset} from "vitest-mock-extended"

const prisma = mockDeep<PrismaClient>()
console.log(prisma)
export default prisma