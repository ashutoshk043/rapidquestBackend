const express = require('express')
const router = require('./routes/routes')
const app = express()
var cors = require('cors')
const fileUpload = require('express-fileupload');
const path = require('path')
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './videos')));
app.use(fileUpload({ createParentPath: true }));
app.use(cors())
app.use('/', router)

app.listen(port,"0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`)
})
