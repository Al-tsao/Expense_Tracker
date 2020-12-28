const mongoose = require('mongoose') // 載入 mongoose
mongoose.connect('mongodb://localhost/category-list', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB
const listGenerated = require('../category.js') // 載入 category.js
const categorytList = require('./category.json')

// mongoDB資料連線
// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')

  // 反正Schema裡面的設定就是一個物件，所以直接把restaurant.json中的物件拋進去就可以了，而且JSON的項目可以比較多，Schema的項目可以比較少
  // const promise = []
  // categorytList.forEach(element => {
  //   promise.push(
  //     listGenerated.create(element)
  //   )
  // })

  // 資料建立後，中斷連線換手
  // Promise.all(promise).then(() => {
  //   db.close()
  //   console.log("categorySeed done!")
  // })

  const list = []
  categorytList.forEach(element => {
    list.push(element)
  })

  listGenerated.create(list
  ).then(() => {
    db.close()
    console.log("categorySeed done!")
  })
})
