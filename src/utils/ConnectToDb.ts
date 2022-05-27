import mongoose from 'mongoose'
import config from 'config'
import log from '../utils/logger'

async function connectToDb() {
    const DBURI = config.get<string>('DBURI')

    try {
        await mongoose.connect(DBURI)
        log.info("connected to database")
    } catch(e) {
        console.log(e)
        process.exit()
    }
}

export default connectToDb