const express = require('express');
const port = 3000;
const app = express();
require('./db/conn');

const router = require('./router/student');

// just to check in the start
// app.get('/',async(req,res)=>{
//     res.send("hello this is home page")done

// // router
app.use(express.json());

app.use(router);

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port, () => {
  console.log(`Connection is live at port number ${port}`);
});
