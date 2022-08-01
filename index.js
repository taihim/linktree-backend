const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const dataRoutes = require('./routes/data')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/data", dataRoutes)


const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
