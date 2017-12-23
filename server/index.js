var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    path = require('path');
    
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})
