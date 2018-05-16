let express = require('express');
const path = require('path');

let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', function(req, res){
	res.sendfile(path.resolve(__dirname,'build','index.html'));
});
app.listen(PORT, function(){
	console.log('Ecpress server is open on port' + PORT);
});



