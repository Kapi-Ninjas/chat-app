import { Client } from '../database/mongodb';

interface User {
    user: string;
    username: string;
};

export default class UserService {
    static list() {
        return Client
            .db('chat-app')
            .collection('users')
            .find()
            .toArray();
    };

    static create(user: User) {
        return Client
            .db('chat-app')
            .collection('users')
            .insertOne(user);
    };
};