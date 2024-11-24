import {Router} from "express"
import {conn} from "../BDconnection.js"
const route_user=Router()

route_user.post("/cadastrar", (req,res) => {
    const {nome, senha} = req.body

    conn.query(`insert into usuário (nome, senha) values 
        ('${nome}', '${senha}')`, (err, result) => {
        if (err) {
        return res.json({
            Erro: "Erro na inserção de dados, " + err.message
        })
       } 
       res.json({
        sucesso: `Usuário ${nome} cadastrado com sucesso!`
       })
    })
})

route_user.get("/listar", (req,res) => {
    conn.query("select * from usuário", (err, result) => {
        if (err) {
        return res.json({
            Erro: "Erro na busca de dados, " + err.message
        })
        }
        res.json(result)
        result.map((item) => {
            console.log(item.nome)
        })
    })
})

export{route_user}

