module.exports = (app) => {

    var repository = require('./PublicacaoRepository')(app);
    var controller = {

        get: (req, res) => {
            repository.get(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message": "Erro ao buscar publicações", "exception": err });
                if (!row)
                    res.status(204).json({ "message": "Nenhum registro encontrado" });
                else
                    res.status(200).json(row);
            });
        },

        post: (req, res) => {
            repository.post(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao inserir publicação", "exception": err  });
                else
                    res.status(200).json(row);
            });
        },

        put: (req, res) => {
            repository.put(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao atualizar publicação", "exception": err  });
                else
                    res.status(200).json(row);
            });
        },

        delete: (req, res) => {
            repository.delete(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao excluir publicação", "exception": err  });
                else
                    res.status(200).json(row);
            });
        }
    };

    return controller;
};