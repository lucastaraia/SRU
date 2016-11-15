module.exports = (app) => {

    var publicacao = app.models.publicacao;
    var repository = {

        get: (req, res, callback) => {
            try {
                publicacao.find()
                    .sort("updatedAt DESC")
                    .paginate({ page: req.query.Pagina, limit: 30 })
                    .populate("Usuario", { select: ["Id", "Nome", "Sobrenome"] })
                    .populate("Comentarios", { select: ["Id", "Conteudo", "Data", "Usuario.Id", "Usuario.Nome", "updateAt"] })
                    .populate("Entidade", { select: ["Id"] })
                    .populate("Categoria", { select: ["Id"] })
                    .populate("Curso", { select: ["Id"] })
                    .exec((err, row) => {
                        return callback(err, row);
                    });
            } catch (e) {
                return callback(e);
            }
        },

        post: (req, res, callback) => {
            try {
                publicacao.create({
                    Titulo: req.body.Titulo,
                    Conteudo: req.body.Conteudo,
                    Data: new Date(),
                    Usuario: req.body.Usuario.Id,
                    Entidade: req.body.Entidade.Id,
                    Categoria: req.body.Categoria.Id,
                    Curso: req.body.Curso.Id
                }).exec((err, row) => {
                        return callback(err, row);
                    });
            } catch (e) {
                return callback(e);
            }

        },

        put: (req, res, callback) => {
            try {
                publicacao.update({ Id: req.body.IdPublicacao }, {
                    Titulo: req.body.Titulo,
                    Conteudo: req.body.Conteudo,
                    Data: new Date(),
                    Usuario: req.body.Usuario.Id,
                    Entidade: req.body.Entidade.Id,
                    Categoria: req.body.Categoria.Id,
                    Curso: req.body.Curso.Id
                }).exec((err, row) => {
                    return callback(err, row);
                });
            } catch (e) {
                return callback(e);
            }
        },

        delete: (req, res, callback) => {
            try {
                publicacao.destroy({ Id: req.params.Id })
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