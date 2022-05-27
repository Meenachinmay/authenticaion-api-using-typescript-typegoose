import express from 'express'

const router = express.Router()

router.get('/checking', (req, res) => {
    return res.status(200).json({
        message: "Testing is okay"
    })
})

export default router