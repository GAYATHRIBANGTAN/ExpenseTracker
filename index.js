const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const cors=require('cors')
const { Expense } = require('./schema.js')
const app=express()
const port=process.env.PORT || 7000
app.use(bodyParser.json())
app.use(cors())
async function connectToDb(){
    try{
await mongoose.connect('mongodb+srv://Gayathri:Gayathri82209@cluster0.t3icp1c.mongodb.net/DB?retryWrites=true&w=majority&appName=Cluster0')
// console.log('DB connected!!')
app.get('/add-Expense', function(request,response){
    console.log(request.body)
    // await Expense.create{
    //     "amount":request.body.amount,
    //     "category":request.body.category,
    //     "date":request.body.date
    // }
})
app.listen(port,function(){
    console.log(`listening @ port${port}`)
    })

    }catch(error){
        console.log(error)
    }
}connectToDb()