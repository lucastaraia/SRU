module.exports = (app) => {

    var comentario = app.models.comentario;
    var notificacao = app.models.notificacao;
    var repository = {

        post: (req, res, callback) => {
            try {
                comentario.create({
                    Conteudo: req.body.Conteudo,
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
                comentario.update({ Id: req.body.Id }, {
                    Conteudo: req.body.Conteudo,
                    Usuario: req.body.Usuario.Id
                }).exec((err, row) => {
                    return callback(err, row);
                });
            } catch (e) {
                return callback(e);
            }
        },

        delete: (req, res, callback) => {
            try {
                comentario.destroy({ Id: req.params.Id })
                    .exec((err, row) => {
                        return callback(err, row);
                    });
            } catch (e) {
                return callback(e);
            }

        }

    };

    return repository;
};