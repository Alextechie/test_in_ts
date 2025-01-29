import { app } from "..";
import dotenv from "dotenv"

dotenv.config()

const port  = process.env.PORT;


app.listen(port, () => {
    console.log(`Backend server running on port ${port}`)
});