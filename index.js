const server = require('./server')

const PORT = process.env.PORT || 4444

server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})