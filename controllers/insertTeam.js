const Team = require('../models/team')

exports.insertTeam = (req, res) => {
    const values = [req.body.time];
    Team.create(values).then((resultado) => {
            res.status(200).send(
                {
                    message: `Produto ${req.body.time} inserido com sucesso!`,
                }
            );
        })
        .catch((erro) => { res.status(500).send({ erro: erro }) });
}