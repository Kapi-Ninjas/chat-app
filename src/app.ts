import http from 'http'
import express from 'express'
import { Server, Socket } from 'socket.io'

import routes from './routes'
import database from './database/index'

import './database/mongodb';

import messageService from './services/message.service';

const app = express();
const server = http.createServer(app);
database()


const io = new Server(server, {
    transports: ['websocket']
});

const GENERAL = 'salageral';

io.on('connection', (socket: Socket) => {
    socket.on('join', (username: string) => {
        socket.join(GENERAL);
        socket.on('message', (message: string) => {
            messageService.create({ username, message });
            io.to(GENERAL).emit('receive', username, message);
        });

        io.to(GENERAL).emit('register', username);
    });
});

app.use(express.json());
app.use(routes);

server.listen(3333, () => {
<<<<<<< Updated upstream
    console.log('🚀 Server started on port 3333');
});
=======
    console.log('Server started on port 3333');
});
>>>>>>> Stashed changes
