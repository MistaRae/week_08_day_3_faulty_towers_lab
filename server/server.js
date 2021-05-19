const Express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')
const app = Express()

app.use(Express.json())
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
.then(client => { 
    const db = client.db('faulty_towers')
    const bookingsCollection = db.collection('bookings')
    const bookingsRouter = createRouter(bookingsCollection)
    app.use('/api/bookings', bookingsRouter)
})
.catch(console.error)

app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`)
})