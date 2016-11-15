module.exports = (app) => {

    var repository = require('./UsuarioBloqueadoRepository')(app);
    var controller = {

        getAll: (req, res) => {

            repository.getAll(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message": "Erro ao buscar usuários bloqueados", "exception": err });
                if (!row)
                    res.status(204).json({ "message": "Nenhum registro encontrado." });
                else
                    res.status(200).json(row);
            });
        },

        post: (req, res) => {
            repository.post(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao inserir usuário", "exception": err  });
                else
                    res.status(200).json(row);
            });
        },

        delete: (req, res) => {
            repository.delete(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao deletar usuário", "exception": err  });
                else
                    res.status(200).json(row);
            });
        }

    };

    return controller;
};