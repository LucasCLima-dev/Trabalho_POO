import {Router} from "express"
const route_user=Router()

const users = []

route_user.post("/login", (req,res) => {

    users.push(req.body)
    res.send("Olá, Lucas")

})

route_user.get("/login", (req,res) => {
    res.json(users)
})

export{route_user}

