module.exports = (app) => {

    var repository = require('./Comentario/ComentarioRepository')(app);
    var notificacaoRepository = require('./Notificacao/NotificacaoRepository')(app);
    var controller = {

        post: (req, res) => {
            repository.post(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao inserir publicação", "exception": err });
                else
                    res.status(200).json(row);
            });

            notificacaoRepository.post(req, res, (err) => {
                if (err) console.log(err);
            });
        },

        put: (req, res) => {
            repository.put(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao atualizar publicação", "exception": err });
                else
                    res.status(200).json(row);
            });
        },

        delete: (req, res) => {
            repository.delete(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao excluir publicação", "exception": err });
                else
                    res.status(200).json(row);
            });
        }
    };

    return controller;
};