(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var StudentSchema = new Schema({
        dni: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        nota: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        semester: {
            type: Number,
            required: true
        }

    });


    module.exports = mongoose.model('students', StudentSchema);
})();