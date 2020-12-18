const db = require('../controller/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const posts = [
    {
      "title": "spoon",
      "imgURL": "https://www.surlatable.com/dw/image/v2/BCJL_PRD/on/demandware.static/-/Sites-shop-slt-master-catalog/default/dwd646efd3/images/large/3898707_01i_0318_s.jpg?sw=1350&sh=1000&sm=fit",
      "author": "PAKMAN",
      "content": 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      "buyLink": ""
    }
  ]
  await Post.insertMany(posts)
  console.log('created posts')
}

const run = async () => {
  await main()
  db.close()
}

run()