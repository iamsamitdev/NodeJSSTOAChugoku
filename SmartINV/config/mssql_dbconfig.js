const config = {
    user: 'sa',
    password: '377040',
    // SamitZ50
    // localhost
    // 192.168.1.72
    server: 'SamitZ50',
    database : 'smartinvdb',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        trustServerCertificate: true,
        encrypt: false
    },
    port: 1433
}

module.exports = config