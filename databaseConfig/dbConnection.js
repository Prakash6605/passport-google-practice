const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/OAuthDB', {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.once('open', function (err) {
    if (err) {
        console.error(err);
    } else console.log('connection successful');
})
mongoose.Promise = global.Promise;

module.exports = {
    mongoose
};