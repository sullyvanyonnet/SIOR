var fs = require('fs')
var express = require('express');
let mongoose = require('mongoose');
let multer = require('multer');

let mongodb = require("./CRUDs/CRUDMongodb");
let mariadb = require("./CRUDs/CRUDMariadb");

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

if (!fs.existsSync(fic_index)) {
    console.log(fic_index + " not found");
}


app.use(express.static('build'));
// pour que node puisse fournir les fichiers contenus dans build

app.get('*', function (req, res) {
    console.log("/*");
    res.sendFile(fic_index);
});

app.post('*', function (req, res) {

    //console.log("/test "+util.inspect(req));
    console.log('param = ' + JSON.stringify(req.body));
    //res.send({ nom: 'aaaa' });

           axios.post('http://localhost:8080/test_reactjs5_tomcat/'+req.url, 
            req.body)
            .then(res2 => {
                console.log(JSON.stringify(res2.data));
                res.send(res2.data);
            })

});





// lancement du serveur

var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});


//Fonctions additionnelles :

app.post('/api/test', (req, res) => {
    var login = req.body.login;
    var mdp = req.body.password;
    res.send(login + password);
});

app.get('/api/connect', (req, res) => {
  
	const login = req.query.login;
	const password = req.query.password || 'coucou';
  
	let db = ['zyonnetsu', '1ht7p865', 'zfm1-zyonnetsu', 'obiwan2.univ-brest.fr'];
  
	let result;
	let sql = `SELECT count(*) as count, cli_id FROM client 
		WHERE cli_login ='` + login + `' and cli_mdp = PASSWORD('` + password + `');`
	MariaDB.executeSelect(db, sql, res, result, connectCallback);
  

});

function connectCallback(res, result) {

	res.setHeader('Content-Type', 'application/json');
	if (result[0].count == 0)
		res.send(JSON.stringify({ greeting: -1 }));
	else
		res.send(JSON.stringify({ greeting: result[0].cli_id }));
}

app.get('/api/getAllVoyages', function (req, res) {
    console.log("/getAllVoyages");
    let db = ['zyonnetsu', '1ht7p865', 'zfm1-zyonnetsu', 'obiwan2.univ-brest.fr']
    let sql = "select * from Voyage, Photo_voyage where Voyage.voy_id = Photo_voyage.voy_id;"
    mariadb.executeSelect(db, sql, res, getAllCoursCallback);
});

function getAllCoursCallback(res, result) {
	console.log(result);

    res.send(result);
}

app.get('/api/getCommentairesVoyage', function (req, res) {
    console.log("/getCommentairesVoyage");
    let voy_id = req.query.voy_id;
    let db = ['zyonnetsu', '1ht7p865', 'zfm1-zyonnetsu', 'obiwan2.univ-brest.fr']
    let sql = `select * from Commentaire, Voyage 
        where Voyage.voy_id = Commentaire.voy_id
        and Commentaire.voy_id = ` + voy_id + `;`
        
    mariadb.executeSelect(db, sql, res, getCommentairesVoyageCallback);
});

function getCommentairesVoyageCallback(res, result) {
	console.log(result);
    res.send(result);
}













