var players = require('../controllers/players.js');

module.exports = function(app) {
    app.get('/players',players.show);
    app.post('/players',players.create);
    app.delete('/players/:id', players.remove);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./team-manager/dist/index.html"));
    });
}