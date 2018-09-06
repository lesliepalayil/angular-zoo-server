const express = require('express');

const app = express();

const animals = [{
	id: 10,
	name: 'Giraffe'
}, {
	id: 20,
	name: 'Lion'
}, {
	id: 30,
	name: 'Cheetah'
}, {
	id: 40,
	name: 'Tiger'
}];

app.get('/api/animals', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.send({ animals });
});

app.get('/api/animals/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	const animal = animals.filter(animal => ""+animal.id === ""+req.params.id);
	res.send(animal.length ? animal[0] : null);
});

app.listen(3000, () => console.log("Zoo app listening on http://localhost:3000/api/animals"));