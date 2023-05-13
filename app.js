import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobiit"}
]
// programa get - consulta/busca

app.get('/', (req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})
app.get('/livros/:id', (req, res) => { //:id para que ira servir para localizar o id e retorno no json
    let index = buscaLivro(req.params.id);
    //livros[index].titulo = req.body.titulo; Comentada porque essa linha substitui o titulo
    res.json(livros[index]); //devolve na posicao que localizou

})

// programa post - criar/inserir

app.post('/livros', (req, res) => {
    livros.push(req.body); //corp da requisição
    res.status(201).send('Livro foi cadastrado com sucesso') // resposta que foi criado com sucesso
})

// programa para atualizar

app.put('/livros/:id', (req, res) => { //:id para que ira servir para localizar o id e retorno no json
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);

})

// programa para deletar

app.delete('/livros/:id', (req, res) => { //:id para que ira servir para localizar o id e retorno no json
    let {id} = req.params;  // atribuição para 
    let index = buscaLivro(id);
    livros.splice(index, 1); // metodo splice localiza o livro pelo index e o segundo paramentro é a qtd que ira deletar
    res.send(`Lvro ${id} removido com sucesso`);

})


// funcao para localizar o livro pelo id
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id) // findIndex localizara o o indice que foi passado por parametro
}

export default app