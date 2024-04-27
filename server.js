const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

//Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});