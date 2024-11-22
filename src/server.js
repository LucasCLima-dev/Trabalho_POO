import express from "express"
import { route_user } from "./user/route-user.js";

const app = express();
app.use(express.json())

app.get("/login", (req,res) => {
    res.send("Olá, Alan")
})

app.use(route_user)

app.listen(3333, () => console.log("Servidor rodado"))