module.exports = (app) => {

    var usuario = app.models.usuario;
    var repository = {

        getAll: (req, res, callback) => {
            try {
                usuario.find({
                    select: [
                        "Id",
                        "Rgm",
                        "Nome",
                        "Sobrenome",
                        "Apelido",
                        "Email",
                        "DataNascimento",
                        "DataInicioCurso",
                        "Cep",
                        "Curso"]
                })
                    .populate("Curso", { select: ["Id", "Nome"] })
                    .exec((err, row) => {
                        return callback(err, row);
                    });
            } catch (e) {
                return callback(e);
            }
        },

        get: (req, res, callback) => {
            try {
                usuario.findOne({ Id: req.params.Id }, {
                    select: [
                        "Id",
                        "Rgm",
                        "Nome",
                        "Sobrenome",
                        "Apelido",
                        "Email",
                        "DataNascimento",
                        "DataInicioCurso",
                        "Cep",
                        "Curso"] })
                    .populate("Curso", { select: ["Id", "Nome"] })
                    .exec((err, row) => {
                        return callback(err, row);
                    });
            } catch (e) {
                return callback(e);
            }
        },

        post: (req, res, callback) => {
            try {
                usuario.create({
                    Senha: req.body.Senha,
                    Rgm: req.body.Rgm,
                    Nome: req.body.Nome,
                    Sobrenome: req.body.Sobrenome,
                    Apelido: req.body.Apelido,
                    Email: req.body.Email,
                    DataNascimento: req.body.DataNascimento,
                    Cep: req.body.Cep,
                    DataInicioCurso: req.body.DataInicioCurso,
                    DataUltimoAcesso: new Date(),
                    Curso: req.body.Curso.Id
                }).exec((err, row) => {
                    delete row.Curso;
                    return callback(err, row);
                });
            } catch (e) {
                return callback(e);
            }
        },

        put: (req, res, callback) => {
            try {
                usuario.update({ Id: req.body.Id }, {
                    Senha: req.body.Senha,
                    Rgm: req.body.Rgm,
                    Nome: req.body.Nome,
                    Sobrenome: req.body.Sobrenome,
                    Apelido: req.body.Apelido,
                    Email: req.body.Email,
                    DataNascimento: req.body.DataNascimento,
                    Cep: req.body.Cep,
                    DataInicioCurso: req.body.DataInicioCurso,
                    DataUltimoAcesso: new Date(),
                    Curso: req.body.Curso.Id
                }).exec((err, row) => {
                    delete row.Curso;
                    return callback(err, row);
                });
            } catch (e) {

            }
        }

    };

    return repository;
};