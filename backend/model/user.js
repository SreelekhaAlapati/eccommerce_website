var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	username: {
        type: String,
        required: true,
		index:true
    },
	password: String
}),
user = mongoose.model('user', userSchema);

module.exports = user;