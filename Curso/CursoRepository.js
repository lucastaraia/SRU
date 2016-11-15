module.exports = (app) => {

    var curso = app.models.curso;
    var repository = {

        getAll: (req, res, callback) => {
            try {
                curso.find({select: ['Id', 'Nome']})
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