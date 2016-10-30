const path = require('path');
const express = require('express');
const app = express();

app.get('/', express.static(path.join(__dirname, 'public')));
app.get('/data', function(req, res) {
	res.json({
		count: 12,
		message: 'hey'
	});
});

const server = app.listen(3000, function() {
	console.log('listening on port', server.address().port);
});