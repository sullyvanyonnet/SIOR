var fs = require('fs')
var express = require('express');
var app = express();
var port = 9000;

var axios = require('axios');
var util = require('util')

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var fic_index = require('os').homedir() + "/tmp_tomcat2/test_reactjs5/build/index.html";
var fic_index = process.cwd() + "/build/index.html";

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

app.get('/getAllVoyages', function (req, res) {
    console.log("/getAllVoyages");
    
    
});















