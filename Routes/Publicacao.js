module.exports = (app) => {
   
    var controller = require('../Publicacao/PublicacaoController.js')(app);
    app.get('/api/timeline/publicacao/:IdUsuario', controller.get);
    app.post('/api/timeline/publicacao/', controller.post);
    app.put('/api/timeline/publicacao/', controller.put);
    app.delete('/api/timeline/publicacao/:Id', controller.delete);

    //Comentario
    app.post('/api/timeline/publicacao/comentario/', controller.post);
    app.put('/api/timeline/publicacao/comentario/', controller.put);
    app.delete('/api/timeline/publicacao/comentario/:Id', controller.delete);
};