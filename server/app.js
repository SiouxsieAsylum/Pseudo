const express = require('express'),
	app = express(),
	keys = require('./config/creds'),
	mysql = require('mysql');

// MYSQL CONFIG
const db = mysql.createConnection(keys.mysql);
db.connect((err) => {
	if(err){
		throw err
	}
	console.log("mysql connected...");
});


// GET ALL
app.get('/data', (req,res) => {
	let sql = 'SELECT * FROM pseudos';
	db.query(sql, (err,result) => {
		if(err){
			throw err;
		}
		console.log(result);
		res.json(result);
	})
});

// POST ONE
app.post('/data', (req,res) => {
	let sql = `
		INSERT INTO projects (
			title 
		)
		VALUES ($1)
		RETURNING *
	`;
	db.one(sql, [req.body.title], (err,result) => {
		if(err){
			throw err;
		}
		console.log(result);
		res.json(result)
	})
});

// CATCH
app.get('*', (req, res) => {
	res.status(404).json({
		message: 'Invalid route!',
	});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Listening on port',PORT)
});