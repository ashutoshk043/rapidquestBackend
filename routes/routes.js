const express = require('express')
const router = express.Router()
const {addVideos, getAllVideos, deleteVideo} = require('../controller/videoController')

router.get('/', (req, res)=>{
    res.send({status:true, message:"API Connected.."})
})


router.post('/addVideo', addVideos)
router.get('/getAllVideos', getAllVideos)
router.delete('/deleteVideo/:name', deleteVideo)


module.exports = router