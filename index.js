const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post('/createProduct',(req,res)=>{
    const name = req.body.name
    const price = req.body.price

    console.log(name,price)
    res.json({message:`O produto ${name} foi enviado com sucesso!`})
})

app.get('/',(req,res)=>{
    res.json({message:'Primeira rota criada com sucesso!'})
})

//porta
app.listen(5000)

