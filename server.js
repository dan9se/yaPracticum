import express from "express"
import http from 'http';

const app = express()
const PORT = 3000;
const server = http.createServer(app);

app.use('/', express.static('src/dist'));

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
