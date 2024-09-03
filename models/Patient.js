const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const passportLocalMongoose = require('passport-local-mongoose');

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber:
    {
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password: {
        type: String,
        required: true
    }
});

PatientSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        return next();
    }
});

PatientSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (err) {
        throw new Error('Password comparison failed');
    }
};

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;