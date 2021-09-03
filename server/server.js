const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

http.listen(port, () => {
    console.log('Express server listening on port ' + port);
});