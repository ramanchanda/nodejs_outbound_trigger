const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post("/new_contact", function(req, res) {  console.log(req);  res.status(201).end(); })   
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
