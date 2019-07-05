const express = require('express'),
	app = express(),
	keys = require('./config/creds'),
	mysql = require('mysql'),
	cors = require('cors'),
	bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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
	console.log(req.body);
	let sql = `
		INSERT INTO pseudos (
			title 
		)
		VALUES (?)
	`;
	db.query(sql, [req.body.title], (err,result) => {
		if(err){
			throw err;
		} 
		console.log(result);
		res.json(result)
	})
});

// UPDATE
app.put('/data/:id', (req,res) => {
	console.log(req.params);
	console.log(req.body);
	let sql = `UPDATE pseudos SET title = ? WHERE id = ?`;
	db.query(sql, [req.body.title, req.params.id], (err,result) => {
		if(err){
			throw err;
		}
		console.log(result);
		res.json(result);
	})
})

// DELETE
app.delete('/data/:id', (req,res) => {
	console.log(req.params)
	let sql = `DELETE FROM pseudos WHERE id = ?`;
	db.query(sql, [req.params.id], (err,result) => {
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