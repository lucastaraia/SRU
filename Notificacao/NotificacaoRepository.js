module.exports = (app) => {

    var notificacao = app.models.notificacao;
    var publicacao = app.models.publicacao;

    var repository = {

        get: (req, res, callback) => {
            try {
                notificacao.find({
                    or: [
                        { UsuarioEnvio: req.params.Id, UsuarioDestino: req.query.UsuarioDestino },
                        { UsuarioEnvio: req.query.UsuarioDestino, UsuarioDestino: req.params.Id }
                    ]
                })
                    .exec((err, row) => {
                        return callback(err, row);
                    });
            } catch (e) {
                return callback(e);
            }
        },

        post: (req, res, callback) => {
            try {
                notificacao.create({
                    Usuario: req.body.Usuario.Id,
                    Publicacao: req.body.IdPublicacao
                }).exec((err, row) => {
                    return callback(err, row);
                });
            } catch (e) {
                return callback(e);
            }
        },

        put: (req, res, callback) => {
            try {
                notificacao.update({
                    Id: req.body.Id
                }, {
                        DataVisualizacao: new Date()
                    }).exec((err, row) => {
                        return callback(err, row);
                    });
            } catch (e) {
                return callback(e);
            }
        },

        delete: (req, res, callback) => {
            try {
                notificacao.destroy({ Id: req.params.Id }).exec((err, row) => {
                    return callback(err, row);
                });
            } catch (e) {
                return callback(e);
            }
        }

    };

    return repository;
};