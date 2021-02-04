import http from 'http'
import { Server, Socket } from 'socket.io'

import express from 'express'
import routes from './routes'
import database from './database/index'

const app = express();
const server = http.createServer(app);
database()

const io = new Server(server, {
    transports: ['websocket']
});

const GENERAL = 'salageral';

io.on('connection', (socket: Socket) => {
    socket.join(GENERAL);

    socket.on('message', (message: string) => {
        // salvar no banco
        io.to(GENERAL).emit('receive', message);
    });

});

app.use(express.json());
app.use(routes);

server.listen(3333, () => {
    console.log('🚀 Server started on port 3333');
});
