const mongoose = require ("mongoose");
var userSchema = new mongoose.Schema({

    user :{
        type : String,
        required :  true,
        unique : true
    }, 

    password : {
        type : String,
        required : true,
    },
    joined_date :{
        type : Date ,
        required : true,
        default : Date.now
    }

});

let User = mongoose.model("User", userSchema);

module.exports.getUsers = function(callback){
    User.find(callback);
}

module.exports.getUserByName = function(user , callback){
    User.find(user , callback);
}

module.exports.insertUser = function(data , callback){
    User.create(data , callback);

}

module.exports.updateUser = function (user , data, callback){
    User.update(user, data , callback);

}

module.exports.deleteUser = function(id , callback){
    User.findByIdAndRemove(id , callback);
}