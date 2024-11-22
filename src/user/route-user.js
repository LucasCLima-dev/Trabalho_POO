import {Router} from "express"
const route_user=Router()

route_user.get("/user", (req,res) => {
    console.log(req)
    res.json("olá usuário")
})

export{route_user}

