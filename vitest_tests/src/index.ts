import express from "express"
import { z } from "zod"
import { prisma } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
});


//routes
app.post("/sum", async (req, res) => {
    const parsedInput = sumInput.safeParse({
        a: req.body.a,
        b: req.body.b
    })

    if(!parsedInput.success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedInput.data!.a + parsedInput.data!.b

    const request = await prisma.sum.create({
        data: {
            a: parsedInput.data!.a,
            b: parsedInput.data!.b,
            result: answer
        }
    })

    console.log(request)
    res.json({
        answer,
        id: request.id
    })
});


app.get("/sum", (req, res) => {
    const parsedInput = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })

    if(!parsedInput.success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedInput.data!.a + parsedInput.data!.b
    res.json({
        answer
    })
})