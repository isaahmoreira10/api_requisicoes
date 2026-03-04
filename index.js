const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get('/saudacao',(req,res)=>{
 
const nome = req.query.nome;

if(!nome){
    return res.status(400).json ({error:"Nome e obrigatorio"});
}

res.json({message:'Olá, ${nome}!'});
});


app.post("/imc",(req,res)=>{
   const{nome,idade,peso,altura} = req.body;

   if(nome || !idade || !peso || !altura){
    return res.status(400).json(
        {

        error:"Dados incompletos"

        });
   }
    
   const imc = peso / (altura * altura); 

   res.json({
    nome,
    imc: imc.toFixed(2)
   })

});

 app.post("/media", (req, res) => {
    const { nome, nota1, nota2 } = req.body;
 }
    // Validação
    if (!nome || nota1 === undefined || nota2 === undefined) {
        return res.status(400).json({
            error: "Dados incompletos"
        });
    }

    const n1 = Number(nota1);
    const n2 = Number(nota2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({
            error: "As notas devem ser números"
        });

    const status = media >= 7 ? "Aprovado" : "Reprovado";

    res.json({
        nome,
        nota1: n1,
        nota2: n2,
        media: media.toFixed(2),
        resultado: status
   
    });

    app.post("/alistamento", (req, res) => {
    const { nome, idade, sexo } = req.body;

    // Validação
    if (!nome || idade === undefined || !sexo) {
        return res.status(400).json({
            error: "Dados incompletos"
        });
    }

    const idadeNum = Number(idade);

    if (isNaN(idadeNum)) {
        return res.status(400).json({
            error: "A idade deve ser um número"
        });
    }

    let mensagem = "";

    if (sexo.toLowerCase() === "masculino") {
        if (idadeNum >= 18) {
            mensagem = "Alistamento concluído com sucesso";
        } else {
            mensagem = "O exército te aguarda";
        }
    } else if (sexo.toLowerCase() === "feminino") {
        if (idadeNum >= 18) {
            mensagem = "Busque um curso preparatório";
        } else {
            mensagem = "Alistamento não obrigatório";
        }
    } else {
        return res.status(400).json({
            error: "Sexo deve ser 'masculino' ou 'feminino'"
        });
    }

    res.json({
        nome,
        idade: idadeNum,
        sexo,
        resultado: mensagem
    });
});
});



app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});
