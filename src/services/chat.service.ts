import { Client } from '../database/mongodb';

interface Chat {
    chat: string;
    username: string;
};

export default class ChatService {
    static list() {
        return Client
            .db('chat-app')
            .collection('chats')
            .find()
            .toArray();
    };

    static create(chat: Chat) {
        return Client
            .db('chat-app')
            .collection('chats')
            .insertOne(chat);
    };
};