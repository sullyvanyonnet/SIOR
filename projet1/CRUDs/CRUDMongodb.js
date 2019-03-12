const MongoClient = require('mongodb').MongoClient;


module.exports = class MongoDB {
	constructor (hote, base) {
		this.base = base;
		this.hote = hote;
	}
	
	executeSelect(col, rqt, res, callback) {
		console.log(rqt);
		let base = this.base;
		MongoClient.connect("mongodb://"+this.hote, {useNewUrlParser: true}, function(error, client) {
			if (error) throw error;
			var db = client.db(base);
			db.collection(col).find(rqt, {voy_images:true}).toArray(function(err, items) {
				 return callback(items, res);
             });
			 client.close();
		});
	}
	
	executeUpdate(col, myQuery, newValues, res,  callback){
		let base = this.base;
		MongoClient.connect("mongodb://"+this.hote, {useNewUrlParser: true}, function(error, client) {
			if (error) throw error;
			var db = client.db(base);
			db.collection(col).updateOne(myQuery, newValues, function(err, items) {
				if (err) throw err;
				return callback(res, items);
			});
			client.close();
		});
	}
	
	executeDeleteOne(col, myQuery, res,  callback){
		let base = this.base;
		MongoClient.connect("mongodb://"+this.hote, {useNewUrlParser: true}, function(error, client) {
			if (error) throw error;
			var db = client.db(base);
			db.collection(col).deleteOne(myQuery, function(err, items) {
				if (err) throw err;
				return callback(res, items);
			});
			client.close();
		});
	}
	
	executeInsertOne(col, myObj, res,  callback){
		let base = this.base;
		MongoClient.connect("mongodb://"+this.hote, {useNewUrlParser: true}, function(error, client) {
			if (error) throw error;
			var db = client.db(base);
			db.collection(col).insertOne(myObj, function(err, items) {
				if (err) throw err;
				return callback(res, items);
			});
			client.close();
		});
	}
}
