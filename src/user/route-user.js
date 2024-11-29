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
    const {jogador1, jogador2, endereço, data, categoria} = req.body

    conn.query(`insert into partidas (jogador1, jogador2, endereço, data, categoria) values 
        ('${jogador1}', '${jogador2}', '${endereço}', '${data}', '${categoria}')`, (err, result) => {
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

    conn.query(`insert into resultados (vencedor, premio) values 
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

route_user.delete("/usuarios", (req,res) => {

    const {id_user} = req.body

    conn.query(`delete from usuário where id_user = ${id_user}`, (err,result) => {
        if (err) {
            return res.json({
                Erro: "Erro na remoção de dados," + err.message
            })
        }
        res.json({
            sucesso: `Usuario excluido com sucesso!`
        })
    })
})

route_user.delete("/partidas", (req,res) => {

    const {id_match} = req.body

    conn.query(`delete from partidas where id_user = ${id_match}`, (err,result) => {
        if (err) {
            return res.json({
                Erro: "Erro na remoção de dados," + err.message
            })
        }
        res.json({
            sucesso: `Partida excluida com sucesso!`
        })
    })
})

route_user.delete("/resultados", (req,res) => {

    const {id_result} = req.body

    conn.query(`delete from resultados where id_user = ${id_result}`, (err,result) => {
        if (err) {
            return res.json({
                Erro: "Erro na remoção de dados," + err.message
            })
        }
        res.json({
            sucesso: `Resultado excluido com sucesso!`
        })
    })
})

route_user.put("/usuarios", (req,res) => {
    const {id_user, novo_nome, nova_senha, novo_email} = req.body 

    conn.query(`update usuário set nome = '${novo_nome}', senha = '${nova_senha}', email = '${novo_email}' where id_user = ${id_user}`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na remoção de dados," + err.message
            })
        }
        res.json({
            sucesso: `Usuário modificado com sucesso!`
        })
    })  
})

route_user.put("/partidas", (req,res) => {
    const {id_match, novo_jogador1, novo_jogador2, novo_endereço, nova_data, nova_categoria} = req.body 

    conn.query(`update partidas set jogador1 = '${novo_jogador1}', jogador2 = '${novo_jogador2}', endereço = '${novo_endereço}', data = '${nova_data}', categoria = '${nova_categoria}' where id_match = ${id_match}`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na remoção de dados," + err.message
            })
        }
        res.json({
            sucesso: `Partida modificada com sucesso!`
        })
    })  
})

route_user.put("/resultados", (req,res) => {
    const {id_result, novo_vencedor, novo_premio} = req.body 

    conn.query(`update resultados set vencedor = '${novo_vencedor}', premio = '${novo_premio}' where id_result = ${id_result}`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro na remoção de dados," + err.message
            })
        }
        res.json({
            sucesso: `Resultado modificado com sucesso!`
        })
    })  
})

route_user.get("/usuarios", (req,res) => {
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

