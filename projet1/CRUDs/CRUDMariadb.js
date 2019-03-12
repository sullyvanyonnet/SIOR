const mariadb = require('mariadb');

function connect (user, mdp, base, hote){
	return mariadb.createConnection({
      		host: hote,
      		user : user,
			//port: 3306,
	  		password : mdp,
	  		database : base
   		})
}
//module.exports = connect;

module.exports = {
	executeSelect : function (db, sql, res, callback){
			connect(db[0], db[1], db[2], db[3]).then(conn => {	
				conn.query(sql)
					.then((rows) => {
						callback(res, rows);
					})
					.catch(err => {
						console.log("requete echouée: " + err);
					});
			})
			.catch(err => {
				console.log("not connected due to error: " + err);
			});
		},

	executeUpdate : function (db, sql) {
			connect(db[0], db[1], db[2], db[3]).then(conn => {	
				conn.query(sql)
					.then((rows) => {
						console.log(rows);
					})
					.catch(err => {
						console.log("requete echouée: " + err);
					});
			})
			.catch(err => {
				console.log("not connected due to error: " + err);
			});
		}
}