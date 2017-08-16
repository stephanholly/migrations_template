var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', function(req, res, next) {
  res.render('login')
});

router.get('/create', function(req, res, next) {
  res.render('create')
});


router.post('/create', function(req, res, next) {
  if (req.body.password === req.body.confirm) {
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      knex.raw(`insert into users values (default,'${req.body.username}','${hash}','${req.body.email}', ${req.body.age})`)
      .then(function(data) {
        // res.redirect('/')
        res.send(data)
      })
    })
} else {
  res.redirect('/create')
}
});

router.post('/login', function(req,res,next) {
  knex.raw(`select * from users where username = '${req.body.username}'`)
  .then(function(users) {
    bcrypt.compare(req.body.password, users.rows[0].password, function(err, resp) {
      if(resp) {
        res.send(users.rows[0])
      } else {
        res.send("NOOOOOOOOOO")
      }
  })
})
})

module.exports = router;
