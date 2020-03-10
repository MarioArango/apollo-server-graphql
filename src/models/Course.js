import { Schema, model } from 'mongoose';

const newCourse = new Schema({
    name: {
        type: String,
        required: true
    },
    creditos: {
        type: Number,
        required: true
    }
});

export default model('Course', newCourse);