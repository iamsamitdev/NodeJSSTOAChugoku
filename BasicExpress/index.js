// Import Express
const express = require('express')

// Import file url.js
const urlRouter = require('./routes/url')

// Create express object
const app = express()

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css , images อยู่ path ไหน
app.use(express.static('assets'))

// เรียกใช้งาน Routes
app.use('', urlRouter)

// Run Express Server ที่ Port 3000
app.listen(3000, ()=> {
    console.log('Server run at port 3000')
})