import express from "express"
import { route_user } from "./user/route-user.js";

const app = express();
app.use(express.json())

const users = []

app.post("/login", (req,res) => {

    users.push(req.body)
    res.send("Olá, Lucas")

})

app.get("/login", (req,res) => {
    res.json(users)
})

app.use(route_user)

app.listen(3333, () => console.log("Servidor rodado"))