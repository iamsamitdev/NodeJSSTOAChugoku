// Import Express
const express = require('express')
// Import MSSQL
const mssql = require('mssql')

// เรียกใช้งาน Moment เพื่อจัดรูปแบบวันที่
const moment = require('moment')

// Import mysql_dbconfig
const dbConnMySQL = require('../config/mysql_dbconfig')

// Import mssql_dbconfig
const dbConnMSSQL = require('../config/mssql_dbconfig')

// สร้างฟังก์ชัน Connect MSSQL Server
mssql.connect(dbConnMSSQL, (err) => {
    if(err){
        console.log("Error: " + err)
    }else{
        console.log("MSSQL Connect DB Success")
    }
})

const router = express.Router()

// สร้างฟังก์ชันแปลงยอดเงินให้เป็นรูปแบบสกุลเงิน (10,000.50)
const formatPrice = (value) => {
    let val = (value/1).toFixed(2).replace(',', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

router.get('',(req, res)=>{
    res.render(
        'pages/backend/dashboard', 
        { 
            title: 'Dashboard', 
            heading: 'Dashboard',
            layout: './layouts/backend'
        }
    )
})

// List Product from MySQL
router.get('/products',(req, res)=>{
    let sql = "SELECT * FROM products"
    dbConnMySQL.query(sql, (err, rows)=>{
        if(err){
            res.send(err)
        }else{
            // res.json(rows)
            res.render(
                'pages/backend/products', 
                { 
                    title: 'Products', 
                    heading: 'Products',
                    layout: './layouts/backend',
                    data: rows,
                    moment: moment,
                    formatPrice: formatPrice
                }
            )
        }
    })
})

// List Product from MSSQL Server
router.get('/mssqlproducts',(req, res)=>{
    let sql = "SELECT * FROM products WHERE CategoryID=1"
    let request = new mssql.Request()

    request.query(sql, (err, rows)=>{
        if(err){
            res.send(err)
            throw err
        }else{
            // res.json(rows.recordset)
            res.render(
                'pages/backend/mssqlproducts', 
                { 
                    title: 'MS SQL Products', 
                    heading: 'MS SQL Products',
                    layout: './layouts/backend',
                    data: rows.recordset,
                    moment: moment,
                    formatPrice: formatPrice
                }
            )
        }
    })
})

module.exports = router