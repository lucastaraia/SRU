module.exports = (app) => {

    var repository = require('./NotificacaoRepository')(app);
    var controller = {

        get: (req, res) => {

            repository.get(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message": "Erro ao buscar notifica��es", "exception": err });
                if (!row)
                    res.status(204).json({ "message": "Nenhum registro encontrado" });
                else
                    res.status(200).json(row);
            });
        },

        post: (req, res) => {
            repository.post(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao inserir notifica��o", "exception": err  });
                else
                    res.status(200).json(row);
            });
        },

        put: (req, res) => {
            repository.put(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao atualizar notifica��o", "exception": err });
                else
                    res.status(200).json(row);
            });
        },

        delete: (req, res) => {
            repository.delete(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao excluir notifica��o", "exception": err  });
                else
                    res.status(200).json(row);
            });
        }
    };

    return controller;
};