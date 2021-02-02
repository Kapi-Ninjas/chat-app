import http from 'http'
import { Server, Socket } from 'socket.io'

import express from 'express'
import routes from './routes'

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    transports: ['websocket']
});

io.on('connection', (socket: Socket) => {
    socket.on('message', (message: string) => {
        console.log(message);
    });

    socket.on('join', () => { });
});

app.use(express.json());
app.use(routes);

server.listen(3333, () => {
    console.log('🚀 Server started on port 3333');
});