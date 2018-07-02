let express = require('express')
let app = express()
const path = require('path')
const segfaultHandler = require('segfault-handler');
segfaultHandler.registerHandler("crash.log");
let mongoDo = require('../mongodb/index')
let bodyParser = require('body-parser');
app.use('/', express.static('public'))
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})
app.post('/car/settrip',function(request,reply){
    new mongoDo.tripModel(request.body).save(function (err,docs) {   
        if(err) {
            reply.send(err)
        }
        reply.send({ result: true })
    })
   
})
app.get('/car/gettrip', function (request, reply){
    console.log(request.query)
    mongoDo.tripModel.find({ creatTime: { $lt: Number(request.query.now) } }, null, { skip: Number(request.query.currentIndex),limit:10},function(err,docs){
        if(err){
            reply.send(err)
        }
        reply.send(docs)
    })
   
})

app.get('/car/gettripByPhone', function (request, reply) {
    console.log(request.query)
    mongoDo.tripModel.find({ accountId: request.query.accountId}, function (err, docs) {
        if (err) {
            reply.send(err)
        }
        if (docs.length < 1) reply.status(404).send({message:'没有相关记录'})
        reply.send({ carList:docs})
    })

})
app.get('/isLogin', function (request, reply) {
    console.log(request.query)
    mongoDo.accountModel.find({ _id: request.query.accountId}, function (err, docs) {
        if (err) {
            reply.send(err)
        }
        reply.send({ result: true})
    })

})

app.post('/resign', function(request, reply) {
    mongoDo.account.find({ num: request.body.num }, function (err, docs){
        console.log(err,docs)
        if (err) {
            reply.send(err)
        }
        if (docs.length > 0) return reply.send({ result: false })
        new mongoDo.account(request.body).save(function (err, docs) {
            if (err) {
                reply.send(err)
            }
            reply.send({ result: true })
        })
    })
    
})
app.post('/login',function(request,reply){
    mongoDo.accountModel.find(request.body,function(err,docs){
        if(err) {
            reply.send(err)
        }
        if (docs.length>0) {
            console.log(docs)
            reply.send({ result: true, accountId: docs[0]._id})


        }else{
            reply.status(500).send({result:false,message:'用户账号或密码错误'})
        }
    })
})
module.exports = app