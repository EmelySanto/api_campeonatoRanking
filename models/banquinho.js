const pg = require('pg')
const banquinho = new pg.Client('postgres://hctyjffq:Ep0e1doqbmoSoiJvvpL8f86QV8LaNITK@kesavan.db.elephantsql.com/hctyjffq')

banquinho.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar ao ElephantSQL')
    } else {
        return console.log('Conectado ao ElephantSQL')
    }
})

module.exports = banquinho