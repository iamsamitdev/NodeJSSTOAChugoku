// Import HTTP module สำหรับไว้สร้างเว็บ Server
const http = require('http')

// Import Path module เพื่ออ่านไฟล์ html
const path = require('path')

// Import File module เพื่อเช็คประเภทไฟล์
const fs = require('fs')

// อ่านไฟล์ html
const getPage = (page) => {
    const filePath = path.join(__dirname, page)
    return fs.readFileSync(filePath)
}

// สร้าง Server
http.createServer((req, res)=>{

    const fileType = path.extname(req.url) || '.html'

    if(fileType === '.html'){
        res.setHeader('Content-Type','text/html')

        if(req.url === '/'){
            res.write(getPage('index.html'))
        }else if(req.url === '/about'){
            res.write(getPage(`${req.url}.html`))
        }
        res.end()
    }else if(fileType === '.css'){
        res.setHeader('Content-Type','text/css')
        res.write(getPage('style.css'))
        res.end()
    }else if(fileType === '.jpg'){

        res.writeHead(200, {'Content-Type': 'image/jpg' })
        const img = fs.readFileSync('./images/header.jpg')
        res.end(img, 'binary')
    }

}).listen(3000)