require('dotenv').config()
import express from 'express'
import config from 'config'
import connectToDb from './utils/ConnectToDb'

import log from './utils/logger'

import routes from './routes/index'

const app = express()

app.use(routes)

const port = config.get('port')

app.listen(port, () => {
    log.info(`App started at localhost:${port}`)

    connectToDb()
})