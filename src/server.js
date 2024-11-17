import express from "express"

const app = express();
app.use(express.json)
app.listen(3333, () => console.log("Servidor rodado"))

app.get("/login", (req,res) => {
    res.send("Olá, Alan")
})