import express from 'express'
import {fruitService} from '../services/fruit.services'

const route = express.Router()

route.get("/", (req, res) => {
    const data = fruitService.getALL()
    res.json(data)
})

//BD > services > routes > server.js > front-end