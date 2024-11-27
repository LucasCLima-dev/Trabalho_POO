import {Router} from "express"
import {conn} from "../BDconnection.js"
const route_user=Router()

route_user.post("/usuarios", (req,res) => {
    const {nome, senha, email} = req.body

    conn.query(`insert into usuário (nome, senha, email) values 
        ('${nome}', '${senha}', '${email}')`, (err, result) => {
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

route_user.post("/partidas", (req,res) => {
    const {jogador1, jogador2, endereco, data, categoria} = req.body

    conn.query(`insert into usuário (jogador1, jogador2, endereco, data, categoria) values 
        ('${jogador1}', '${jogador2}', '${endereco}', '${data}', '${categoria}')`, (err, result) => {
        if (err) {
        return res.json({
            Erro: "Erro na inserção de dados, " + err.message
        })
       } 
       res.json({
        sucesso: `Partida marcada!`
       })
    })
})

route_user.post("/resultados", (req,res) => {
    const {vencedor, premio} = req.body

    conn.query(`insert into usuário (vencedor, premio) values 
        ('${vencedor}', '${premio}')`, (err, result) => {
        if (err) {
        return res.json({
            Erro: "Erro na inserção de dados, " + err.message
        })
       } 
       res.json({
        sucesso: `Vencedor declarado!`
       })
    })
})

route_user.get("/usuarios", (req,res) => {
    conn.query("select * from usuario", (err, result) => {
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

route_user.get("/partidas", (req,res) => {
    conn.query("select * from partidas", (err, result) => {
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

route_user.get("/resultados", (req,res) => {
    conn.query("select * from resultados", (err, result) => {
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

