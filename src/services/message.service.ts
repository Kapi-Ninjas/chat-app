import { Client } from '../database/mongodb';

interface Message {
    message: string;
    username: string;
};

export default class MessageService {
    static list() {
        return Client
            .db('chat-app')
            .collection('messages')
            .find()
            .toArray();
    };

    static create(message: Message) {
        return Client
            .db('chat-app')
            .collection('messages')
            .insertOne(message);
    };
};