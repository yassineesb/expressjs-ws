const app = require('./index')
const port = 3000;
const host = '127.0.0.1'



app.listen(port, host, () => {
console.log(`Server running on: http://${host}:${port}`)
})
