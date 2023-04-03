const banquinho = require('./banquinho')

exports.create = (values) => {
    const order = `INSERT INTO times(time) VALUES ($1)`;
    return banquinho.query(order, values)
  }