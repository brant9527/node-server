// const MongoClient = require('mongodb').MongoClient
let mongoose = require('mongoose')
let url = "mongodb://localhost:27017/runoob";
let db = mongoose.connect(url)

let mongoDo = {}
let tripScheme = new mongoose.Schema({
    startAddress: String,
    endAddress: String,
    pickerVisible: String,
    contact: String,
    roleValue: Number,
    introduction: String,
    creatTime:Number,
    money:Number
})
let accountScheme = new mongoose.Schema({
    num: String,
    psw: String
})
mongoDo.tripModel = mongoose.model('trip', tripScheme);
mongoDo.accountModel = mongoose.model('account', accountScheme);
module.exports = mongoDo