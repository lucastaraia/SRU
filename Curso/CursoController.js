module.exports = (app) => {

    var repository = require('./CursoRepository')(app);
    var controller = {

        getAll: (req, res) => {

            repository.getAll(req, res, (err, row) => {
                if (err)
                    res.status(500).json({ "message": "Erro ao buscar cursos", "exception": err });
                if (!row)
                    res.status(204).json({ "message": "Nenhum registro encontrado" });
                else
                    res.status(200).json(row);
            });
        }

    };

    return controller;
};