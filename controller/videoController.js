const path = require("path");
const fs = require('node:fs');
const folderPath = path.join(__dirname, "..", "videos/");



const addVideos = async (req, res) => {
  try {
    const subtitle = req.body.subtitle ;
    let videoFileName;
    let file;

    if (req.files && [req.files].length > 0) {
      file = req.files.video;
      const storagepath = path.join(__dirname, "..", "videos/") + subtitle;

      if (!req.files) {
        res.status(400).send("No files were uploaded.");
        return;
      }
      file.mv(storagepath, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
      });
      videoFileName = subtitle;
    }

    res.send({ status: true });
  } catch (error) {
    console.log(error.message);
  }
};


const getAllVideos = async (req, res)=>{
    const data = fs.readdirSync(folderPath);
    res.send({status:true, data:data.reverse()})
}

const deleteVideo = async (req, res)=>{
  fs.rm(folderPath+req.params.name, err => {
    if (err) {  
      throw err;
    }
    console.log(`${req.params.name} is deleted!`);
  });
  res.send({data:"deleted"})
}

module.exports = { addVideos, getAllVideos , deleteVideo};
