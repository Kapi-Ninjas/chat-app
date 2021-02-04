import mongoose from 'mongoose';
import * as dotenv from "dotenv";

dotenv.config();


export default () => {
  mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@app-chat.3jzpf.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
};
