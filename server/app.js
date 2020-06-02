const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

//allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/gql-ninja',{ useUnifiedTopology: true,useNewUrlParser: true  })
mongoose.connection.once('open',()=>{
    console.log(`connected to database`)
})

app.use('/graphql',graphqlHTTP({
    //schema: schema
    schema,
    graphiql:true
}))

app.listen(4000, ()=>{
    console.log(`now listening to requests on port 4000`)
})