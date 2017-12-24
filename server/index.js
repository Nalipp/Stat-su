const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const path = require('path');
const timeSlipRoutes = '.routes/timeSlip';
    
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/timeSlip', timeSlipRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})
