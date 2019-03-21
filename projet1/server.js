var fs = require('fs')
var express = require('express');
let mongoose = require('mongoose');
let multer = require('multer');

let mongodb = require("./CRUDs/CRUDMongodb");
let MariaDB = require("./CRUDs/CRUDMariadb");

let Schema = mongoose.Schema;
let app = express();
let port = 9000;

let axios = require('axios');
let util = require('util')

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var fic_index = require('os').homedir() + "/tmp_tomcat2/test_reactjs5/build/index.html";
let fic_index = process.cwd() + "/build/index.html";
let db = ['zyonnetsu', '1ht7p865', 'zfm1-zyonnetsu', 'obiwan2.univ-brest.fr'];

if (!fs.existsSync(fic_index)) {
    console.log(fic_index + " not found");
}


app.use(express.static('build'));


// lancement du serveur

var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});


//Fonctions additionnelles :

/* Fonction CURL pour envoyer une requete POST au serveur : 
curl -X POST -H 'Content-Type: application/json' -d '{"login": "coco", "password": "coco"}' http://localhost:9000/api/connect
*/

app.get('/api/connect', (req, res) => {
    console.log('/connect');

    const login = req.query.login;
    const password = req.query.password;

    console.log(login + password);

    let sql = `SELECT count(*) as count, cli_id FROM Client 
        WHERE cli_login ='` + login + `' and cli_mdp = PASSWORD('` + password + `');`

    console.log(sql);
    MariaDB.executeSelect(db, sql, res, connectCallback);
});

function connectCallback(res, result) {

    res.setHeader('Content-Type', 'application/json');
    if (result[0].count == 0) {
        res.send(JSON.stringify({ greeting: -1 }));
    }
    else {
        res.send(JSON.stringify({ greeting: result[0].cli_id }));
    }
}


app.get('/api/inscription', (req, res) => {
    console.log('/inscription');

    const login = req.query.login;
    const password = req.query.password;

    console.log(login + password);

    let sql = `INSERT INTO Client(cli_login, cli_mdp) VALUES ('` + login + `', PASSWORD('` + password + `'))`

    MariaDB.executeUpdate(db, sql, res, inscriptionCallback);



});


function inscriptionCallback(res, result) {

    console.log(result);
    res.setHeader('Content-Type', 'application/json');

    if (result == null) {
        res.send(JSON.stringify({ "affectedRows": 0 }));
    } else {
        res.send(JSON.stringify(result));
    }

    console.log(result);

}


app.get('/api/getAllVoyages', function (req, res) {
    console.log('/getAllVoyages');

    let MinVoy_id = req.query.voy_id || 0;

    let sql = `select Voyage.voy_id, voy_nom, DATE_FORMAT(voy_debut, "%d/%c/%Y") as voy_debut, DATE_FORMAT(voy_fin, "%d/%c/%Y") as voy_fin, voy_description, voy_prix, pho_id, pho_chemin 
                from Voyage, Photo_voyage 
                where Voyage.voy_id = Photo_voyage.voy_id 
                and pho_id = (select min(pho_id) 
                                from Photo_voyage as f 
                                where f.voy_id = Voyage.voy_id)
                and Voyage.voy_id > ` + MinVoy_id + `
                LIMIT 10`

    console.log(sql);
    MariaDB.executeSelect(db, sql, res, getAllVoyagesCallback);
});

function getAllVoyagesCallback(res, result) {
    console.log(result);

    res.send(result);
}


app.get('/api/getVoyage', function (req, res) {
    console.log('/getVoyage');

    let voy_id = req.query.voy_id;
    let sql = `select Voyage.voy_id, voy_nom, DATE_FORMAT(voy_debut, "%d/%c/%Y")as voy_debut, DATE_FORMAT(voy_fin, "%d/%c/%Y")as voy_fin, voy_description, voy_prix 
    from Voyage 
    where Voyage.voy_id = ` + voy_id + `;`

    console.log(sql);
    MariaDB.executeSelect(db, sql, res, getVoyageCallback);
});

function getVoyageCallback(res, result) {
    console.log(result);
    res.send(result);
}


app.get('/api/getImagesVoyage', function (req, res) {
    console.log('/getImagesVoyage');

    let voy_id = req.query.voy_id;
    let sql = `select * from Photo_voyage where voy_id = ` + voy_id + `;`

    console.log(sql);
    MariaDB.executeSelect(db, sql, res, getImagesVoyageCallback);
});

function getImagesVoyageCallback(res, result) {
    console.log(result);
    res.send(result);
}


app.get('/api/getCommentairesVoyage', function (req, res) {
    console.log('/getCommentairesVoyage');

    let voy_id = req.query.voy_id;
    let sql = `select com_id, com_texte, cli_login from Commentaire, Client where Client.cli_id = Commentaire.cli_id and voy_id = ` + voy_id + `;`

    console.log(sql);
    MariaDB.executeSelect(db, sql, res, getCommentairesVoyageCallback);
});

function getCommentairesVoyageCallback(res, result) {
    console.log(result);
    res.send(result);
}


app.get('/api/getPanierClient', function (req, res) {
    console.log('/getPanierClient');

    let cli_id = req.query.cli_id || 0;

    let sql = `select res_id, Voyage.voy_id, voy_nom, DATE_FORMAT(voy_debut, "%d/%c/%Y") as voy_debut, DATE_FORMAT(voy_fin, "%d/%c/%Y") as voy_fin, voy_prix, pho_id, pho_chemin 
                from Voyage, Photo_voyage, Reservation 
                where Voyage.voy_id = Photo_voyage.voy_id 
                and Voyage.voy_id = Reservation.voy_id 
                and pho_id = (select min(pho_id) 
                                from Photo_voyage as f 
                                where f.voy_id = Voyage.voy_id)
                and cli_id = ` + cli_id + `;`

    console.log(sql);
    MariaDB.executeSelect(db, sql, res, getPanierClientCallback);
});

function getPanierClientCallback(res, result) {
    console.log(result);

    res.send(result);
}


app.get('/api/getCountPanierClient', function (req, res) {
    console.log('/getCountPanierClient');

    let cli_id = req.query.cli_id || 0;

    let sql = `Select count(*) as count from Reservation where cli_id = ` + cli_id + `;`

    console.log(sql);
    MariaDB.executeSelect(db, sql, res, getCountPanierClientCallback);
});

function getCountPanierClientCallback(res, result) {
    console.log(result);

    res.send(result);
}


app.get('/api/confirmePanierClient', function (req, res) {
    console.log('/confirmePanierClient');

    let res_id = req.query.res_id || 0;
    let cli_id = req.query.cli_id || 0;
    let voy_id = req.query.voy_id || 0;


    let MongoDB = new mongodb('obiwan2.univ-brest.fr', 'Assurance');
    let rows = null;
    var myobj = {
        "res_id": res_id,
        "cli_id": cli_id,
        "voy_id": voy_id,
        "date": "new Date()"
    };

    MongoDB.executeInsertOne("historique", myobj, function (ph, result) {
        rows = result;
        console.log(rows);
    });

    let sql = `Delete from Reservation where res_id = ` + res_id + `;`;

    console.log(sql);
    MariaDB.executeUpdate(db, sql, res, confirmePanierClientCallback);
});

function confirmePanierClientCallback(res, result) {
    console.log(result);

    res.send(result);
}











