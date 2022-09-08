const mongoose = require('mongoose');


const DB = process.env.DATABASE;


try {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('connnection is Successfull');
}
catch (error) { console.log('no connection') };
