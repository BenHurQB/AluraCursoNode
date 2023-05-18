

import app from './src/app.js'
const port = process.env.port || 3000;

// listen é utilizado em servidores HTTP para escutar as requisições vindas de um determinado endereço de IP e porta
// port indica a porta onde o servidor deve escutar as requisições e o segundo paramentro é uma função callback
// que é executada qdo o servidor começa a escutar as requisições.
// O servidor esta escutando na porta especificada pela variavel port.

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
