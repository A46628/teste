console.log("verificado com sucesso")



const TASKS_DATA_HOST = 'localhost:9200'
const DEFAULT_PORT = '8080'


const path = require('path')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', tasksApi)

app.listen(process.argv[2] || 8080 , () => console.log("Listening"))



function tasksApi(req, resp) {
    resp.send("fe no pai")
}