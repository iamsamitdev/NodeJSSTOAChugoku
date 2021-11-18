const f = async() => {
    let promise = new Promise((resolve, reject) => {
        console.log("กำลังโหลดข้อมูล..")
        setTimeout(() => {
            resolve("done")
        }, 3000)
    })

    let result = await promise // มันจะรอครบเวลาที่กำหนดจึงคืนค่าออกมา
    console.log(result)
}

f()