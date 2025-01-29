import express from "express";
import {z} from "zod"

export const app = express();

app.use(express.json());


const sumInput = z.object({
    a: z.number(),
    b: z.number()
})




// routes
app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b
    const ans = a + b
    res.json({ans})
});


app.post("/multiply", (req, res) => {
    const {a, b} = req.body;
    const answer = a * b
    res.json({answer})
})

app.get("/sum", (req, res) => {
    const parsedResponse =  sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })


    if (!parsedResponse.success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const ans = parsedResponse.data!.a + parsedResponse.data!.b

    res.json({
        ans
    })
})


