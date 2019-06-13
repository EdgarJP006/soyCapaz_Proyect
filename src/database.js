const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud-mongo', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
 .then(db  => console.log('DB is connected'))
 .catch(err => console.error(err));