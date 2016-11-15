module.exports = (app) => {

    var repository = require('./UsuarioRepository')(app);
    var controller = {

        getAll: (req, res) => {
            repository.getAll(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message": "Erro ao buscar usuários", "exception": err });
                if (!row)
                    res.status(204).json({ "message": "Nenhum registro encontrado." });
                else
                    res.status(200).json(row);
            });
        },

        get: (req, res) => {

            repository.get(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message": "Erro ao buscar usuário", "exception": err });
                if (!row)
                    res.status(204).json({ "message": "Nenhum registro encontrado." });
                else
                    res.status(200).json(row);
            });
        },

        post: (req, res) => {

            repository.post(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao inserir usuário", "exception:": err });
                else
                    res.status(200).json(row);
            });
        },

        put: (req, res) => {
            repository.put(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message:": "Erro ao atualizar usuário", "exception:": err });
                else
                    res.status(200).json(row);
            });
        }

    };

    return controller;
};