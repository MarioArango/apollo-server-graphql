import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true, 
        min: 3
    },
    lastname: {
        type: String,
        required: false,
        min: 3
    },
    age: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        required: true,
        min: 2
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model('User', userSchema);
